import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

import prettierConfig from 'eslint-config-prettier';

export default [
  // Общие игноры
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.vite/**',
      '**/coverage/**',
      '**/.next/**',
      '**/dist-types/**',
      '**/prisma/migrations/**',
    ],
  },

  // Базовые JS правила
  js.configs.recommended,

  // TypeScript (без type-aware линтинга — проще и без боли на старте)
  ...tseslint.configs.recommended,

  // Общие настройки для TS/TSX
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // по твоим пожеланиям: console разрешен
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // CLIENT: React
  {
    files: ['client/**/*.{ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // React
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,

      // Hooks
      ...reactHooks.configs.recommended.rules,

      // Vite HMR
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Ты сказал: default export разрешаем
      // (Поэтому никаких ограничений на exports не добавляем)
    },
  },

  // SERVER: Node
  {
    files: ['server/**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // тут можно ужесточить позже
    },
  },

  // Отключаем конфликтующие с Prettier правила
  prettierConfig,
];
