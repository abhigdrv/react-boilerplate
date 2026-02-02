import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';

export default [
  // 1️⃣ Global ignores
  {
    ignores: [
      'dist',
      'node_modules',
      'coverage',
      'build'
    ],
  },

  // 2️⃣ App (browser) code
  {
    files: ['**/*.{ts,tsx}'],
    ignores: [
      'vite.config.ts',
      'vitest.config.ts',
      'playwright.config.ts'
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      '@typescript-eslint/no-explicit-any': 'warn',

      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },

  // 3️⃣ Node-only config files (Vite, Vitest, Playwright)
  {
    files: [
      'vite.config.ts',
      'vitest.config.ts',
      'playwright.config.ts'
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.node,
      parser: tsParser,
      sourceType: 'module'
    }
  },

  // 4️⃣ Prettier last
  prettier,
];