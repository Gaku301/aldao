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
    'react/no-unstable-nested-components': [
      'off',
      {
        allowAsProps: false,
        customValidators:
          [] /* optional array of validators used for propTypes validation */,
      },
    ],
    quotes: ['error', 'single'],
  },
};
