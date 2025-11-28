const tsParser = require('@typescript-eslint/parser');
const importPlugin = require('eslint-plugin-import');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const reactNative = require('eslint-plugin-react-native');
const simpleImportSort = require('eslint-plugin-simple-import-sort');

module.exports = [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'web-build/**',
      'android/**',
      'ios/**',
      '.expo/**',
      'expo-env.d.ts',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: tsParser,
    },
    settings: {
      react: { version: 'detect' },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-native': reactNative,
      import: importPlugin,
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
    },
  },
];
