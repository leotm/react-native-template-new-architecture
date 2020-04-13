module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'react-native-typescript',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['lib/'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
