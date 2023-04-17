module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  extends: '@react-native-community',
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    quotes: ['error', 'single'],
  },
};
