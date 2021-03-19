module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
  },
  plugins: ['simple-import-sort', '@typescript-eslint'],
};
