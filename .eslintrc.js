module.exports = {
  root: true,
  extends: [
    'prettier',
    'prettier/react',
    'prettier/standard',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:jest/all',
    'plugin:react-native/all',
    'plugin:react-hooks/recommended',
    'react-native-typescript',
    'airbnb-typescript',
    '@react-native-community',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    },
  },
  env: {
    'react-native/react-native': true,
    'jest/globals': true
  },
  plugins: ['react', 'react-native', 'jest', 'detox', '@typescript-eslint', 'react-hooks'],
  ignorePatterns: ['lib/', 'babel.config.js', 'metro.config.js', 'tsconfig.json'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
};
