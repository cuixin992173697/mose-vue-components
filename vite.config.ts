import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ command }) => {
  const isBuild = command === 'build'

  return {
    plugins: [vue()],
    root: isBuild ? undefined : path.resolve(__dirname, 'example'),
    build: isBuild
      ? {
          lib: {
            entry: path.resolve(__dirname, 'packages/index.ts'),
            name: 'MoseUI',
            fileName: (format) => `mose-ui.${format}.js`
          },
          rollupOptions: {
            external: ['vue', 'element-plus']
          }
        }
      : undefined
  }
})
