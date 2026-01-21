import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier/flat';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig([
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/*.min.js', '**/*.json', '**/*.md'],
  },
  {
    files: ['**/*.{js,ts,mjs,cjs,vue}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: [path.resolve(__dirname, 'tsconfig.eslint.json')],
        tsconfigRootDir: __dirname,
        extraFileExtensions: ['.vue'],
      },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      vue: pluginVue,
    },
    extends: [js.configs.recommended],
    rules: {
      'no-console': 'warn',
      semi: ['warn', 'always'],
      quotes: ['error', 'single'],
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: [path.resolve(__dirname, 'tsconfig.eslint.json')],
        tsconfigRootDir: __dirname,
        extraFileExtensions: ['.vue'],
      },
      globals: { ...globals.browser, ...globals.node },
    },
  },
  ...pluginVue.configs['flat/essential'],
  // prettier 配置
  prettierConfig,
]);
