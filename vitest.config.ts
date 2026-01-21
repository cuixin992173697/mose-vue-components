import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          globals: true,
          name: 'utils',
          include: ['packages/utils/__test__/**/*.{test,spec}.{ts,js,tsx,jsx}'],
          environment: 'node',
        },
      },
      {
        plugins: [vue()],
        test: {
          globals: true,
          name: 'components',
          environment: 'jsdom', // 默认使用 jsdom 环境
          setupFiles: './vitest.setup.ts', // 可选：全局设置文件
          include: ['packages/**/src/**/__test__/**/*.{test,spec}.{ts,js,tsx,jsx}', 'packages/**/__test__/**/*.{test,spec}.{ts,js,tsx,jsx}'],
          exclude: ['**/node_modules/**', '**/dist/**', '**/.git/**'],
        },
      },
    ],
  },
});
