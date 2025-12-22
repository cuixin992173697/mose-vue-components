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
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'MyUI',
            fileName: (format) => `my-ui.${format}.js`
          },
          rollupOptions: {
            external: ['vue', 'element-plus']
          }
        }
      : undefined
  }
})
