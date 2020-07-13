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
    '@storybook/storybook',
    'airbnb-typescript',
    'react-native-typescript',
    '@react-native-community',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    'react-native/react-native': true,
    'jest/globals': true,
  },
  plugins: [
    'react',
    'react-native',
    'jest',
    'detox',
    '@typescript-eslint',
    'react-hooks',
  ],
  ignorePatterns: [
    'lib/',
    'babel.config.js',
    'metro.config.js',
    'tsconfig.json',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off', // Prefer type inference
    'jest/prefer-inline-snapshots': 'off', // Avoid inlining unreadable RN snapshots
    'react/static-property-placement': 'off', // TS wants these defs inside the Class,
    'jsx-a11y/accessible-emoji': 'off', // RN TS requires raw text in <Text>, not <span>
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'App.tsx',
          '**/jest.{config,setup}.js',
          '**/*{.,_}{test,spec}.{ts,tsx}',
          '**/__tests__/**/*.{ts,tsx}',
          '**/storybook/*.ts',
          '**/stories/**/*.tsx',
        ],
      },
    ],
  },
};
