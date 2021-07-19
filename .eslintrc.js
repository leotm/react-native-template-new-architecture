module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:yml/prettier',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript-prettier',
    'plugin:jest/all',
    'plugin:react/all',
    'plugin:react-hooks/recommended',
    'react-native-typescript',
    'plugin:react-native/all',
    '@react-native-community',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ["*.yaml", "*.yml"],
      parser: "yaml-eslint-parser",
    },
  ],
  env: {
    'react-native/react-native': true,
    'jest/globals': true,
  },
  ignorePatterns: [
    'lib/',
    'babel.config.js',
    'metro.config.js',
    '.eslintrc.js',
    '!/.github'
  ],
  plugins: [
    'deprecation'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off', // Prefer type inference
    'jest/prefer-inline-snapshots': 'off', // Avoid inlining unreadable RN snapshots
    'react/static-property-placement': 'off', // TS wants these defs inside the Class,
    'jsx-a11y/accessible-emoji': 'off', // RN TS requires raw text in <Text>, not <span>
    'react/jsx-no-literals': 'off',
    'react/jsx-max-depth': 'off',
    'react-native/no-raw-text': ['error', { skip: 'Text.Text' }], // https://github.com/Intellicode/eslint-plugin-react-native/issues/271
    'react/function-component-definition': [1, {
      'namedComponents': 'arrow-function',
      'unnamedComponents': 'arrow-function',
    }],
    'deprecation/deprecation': 'error',
    'spaced-comment': 0, // https://github.com/ota-meshi/eslint-plugin-yml/issues/91
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
