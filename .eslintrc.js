module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'react-native-typescript',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  ignorePatterns: ['lib/'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/no-cycle': 'off',
    'sort-keys': 'off',
    'import-order-alphabetical/order': 'off',
    'simple-import-sort/sort': 'warn'
  },
};
