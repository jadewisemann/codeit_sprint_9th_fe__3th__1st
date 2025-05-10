import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

import prettier from 'eslint-plugin-prettier';
import tseslint, { parser } from 'typescript-eslint'
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import filenamesPlugin from 'eslint-plugin-filenames';
import foldersPlugin from 'eslint-plugin-folders';
import stylisticJs from '@stylistic/eslint-plugin-js';
import jsxA11y from 'eslint-plugin-jsx-a11y';

const eslintConfig = [
  {
    ignores: ['dist', 'node_modules', '.next', 'out'],
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        React: 'readonly', 
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
        },
        typescript: { }
      },
      'filenames': {
        'components': '^[A-Z][a-zA-Z0-9]*$',
        'utils': '^[a-z][a-zA-Z0-9]*$',
      },
      'folders': {
        'pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'prettier': prettier,
      'react': react,
      'jsx-a11y': jsxA11y,
      'import': importPlugin,
      'filenames': filenamesPlugin,
      'folders': foldersPlugin,
      '@stylistic/js': stylisticJs,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      'prettier/prettier': ['error', { 
        "experimentalOperatorPosition": "start",
        "printWidth": 80,
        "tabWidth": 2,
        "useTabs": false,
        "semi": true,
        "singleQuote": true,
        "quoteProps": "as-needed",
        "jsxSingleQuote": true,
        "trailingComma": "all",
        "bracketSpacing": true,
        "bracketSameLine": false,
        "arrowParens": "avoid",
        "endOfLine": "auto"
      }],

      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-unused-vars': 'error',
      'eqeqeq': ['error', 'always'],
      'react/function-component-definition': ['error', {
        namedComponents: ['arrow-function', 'function-declaration'], // function-declaration도 허용 가능
        unnamedComponents: 'arrow-function',
      }],
      'func-style': ['error', 'expression'],

      // @stylistic/js 규칙 (Prettier와 충돌하지 않도록 주의)
      // 예: '@stylistic/js/array-bracket-newline': ['error', 'consistent'],
      // 예: '@stylistic/js/array-element-newline': ['error', 'consistent'],
      // 예: '@stylistic/js/operator-linebreak': ['error', 'before', {'overrides' : {'=': 'after',}}],
      // 예: '@stylistic/js/object-curly-newline': ['error', { /* 설정 */ }],
      
      // import Plugin 규칙
      'import/order': ['error', { /* 사용자 import 순서 설정 */
          groups: [
            'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type',
          ],
          pathGroups: [
            { pattern: 'react', group: 'external', position: 'before' },
            { pattern: '{react-*,react-*/**, react/*}', group: 'external', position: 'before' },
            { pattern: 'next/**', group: 'external', position: 'before' }, // Next.js 관련 모듈
            { pattern: '@/**', group: 'internal', position: 'before' }, // src 경로 alias (tsconfig.json 설정과 일치)
            // ... 기타 pathGroups 설정 ...
          ],
          pathGroupsExcludedImportTypes: ['react'],
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always', // 그룹 사이에 한 줄 띄우기
          distinctGroup: true,
      }],
      'import/no-duplicates': 'error', // 중복 import 방지
      'import/no-unresolved': 'off', // TypeScript resolver 사용 시 끌 수 있음 (또는 eslint-import-resolver-typescript 설정)
      'import/prefer-default-export': 'off', // default export 강제 안 함

      // jsx-a11y (필요한 규칙만 활성화, next/core-web-vitals에 이미 포함된 규칙 확인)
      // 예: 'jsx-a11y/anchor-is-valid': [ 'error', { /* 설정 */ }],

      // 기타 필요한 규칙들
      // 'arrow-body-style': 'warn',
      // 'prefer-arrow-callback': 'warn',
    },
  }, 
];

export default eslintConfig;
