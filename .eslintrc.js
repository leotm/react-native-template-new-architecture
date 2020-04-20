module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    // 'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'react-native-typescript',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
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
