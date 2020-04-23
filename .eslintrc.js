module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'react-native-typescript',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    },
  },
  env: {
    'react-native/react-native': true
  },
  plugins: ['react', 'react-native', '@typescript-eslint', 'simple-import-sort', 'detox', 'react-hooks'],
  ignorePatterns: ['lib/', 'babel.config.js', 'metro.config.js', 'tsconfig.json'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/no-cycle': 'off',
    'sort-keys': 'off',
    'import-order-alphabetical/order': 'off',
    'simple-import-sort/sort': 'warn',
    'eslint-comments/no-unused-disable': 'off'
  },
};
