const tsParser = require('@typescript-eslint/parser');
const importPlugin = require('eslint-plugin-import');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const reactNative = require('eslint-plugin-react-native');

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
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'import/order': [
        'warn',
        {
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
];
