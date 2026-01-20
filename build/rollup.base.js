import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import ts from 'rollup-plugin-typescript2'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import path from 'path'

export function createBasePlugins(pkgDir) {
  return [
    peerDepsExternal(),
    resolve({
      extensions: ['.js', '.ts', '.tsx', '.vue'],
    }),
    commonjs(),
    vue({
      css: true,
      compileTemplate: true,
    }),
    postcss({
      extract: true,
      extensions: ['.scss', '.css'],
    }),
    ts({
      tsconfig: path.resolve(new URL(import.meta.url).pathname, '../../tsconfig.json'),
      clean: true,
      useTsconfigDeclarationDir: true,
    }),
  ]
}
