import path from 'path'
import del from 'rollup-plugin-delete'
import { createBasePlugins } from './rollup.base.js'

export function buildPackage(pkgDir, inputFile = 'index.ts', isStyle = false) {
  let output = []

  if (isStyle) {
    // 样式包，只输出一个css文件，js文件输出为一个空文件（或者不输出）
    output = [
      {
        file: path.resolve(pkgDir, 'dist/index.css'),
        format: 'es',
      },
      // 如果你希望生成空的js文件，也可以加下面这个，否则注释掉
      {
        file: path.resolve(pkgDir, 'dist/index.js'),
        format: 'es',
        exports: 'named',
      }
    ]
  } else {
    // 代码包，正常输出 cjs + esm 两个格式
    output = [
      {
        file: path.resolve(pkgDir, 'dist/index.esm.js'),
        format: 'es',
        exports: 'named',
      },
      {
        file: path.resolve(pkgDir, 'dist/index.cjs.js'),
        format: 'cjs',
        exports: 'named',
      },
    ]
  }

  return {
    input: path.resolve(pkgDir, inputFile),
    output,
    plugins: [
      //  每次构建前，删除当前子包的 dist
      del({
        targets: path.resolve(pkgDir, 'dist/*'),
        hook: 'buildStart'
      }),
      ...createBasePlugins()
    ],
    external: ['vue'] 
  }
}