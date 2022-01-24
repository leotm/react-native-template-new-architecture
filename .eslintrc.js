module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript-prettier',
    'plugin:jest/all',
    'plugin:react/all',
    'plugin:react-hooks/recommended',
    'react-native-typescript',
    'plugin:react-native/all',
    // '@react-native-community',
    // 'plugin:prettier/recommended',
    'plugin:yml/prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest'
  },
  overrides: [
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
      rules: {
        'spaced-comment': 'off',
        'yml/flow-sequence-bracket-spacing': ['error', 'always']
      }
    }
  ],
  env: {
    'react-native/react-native': true,
    'jest/globals': true
  },
  ignorePatterns: [
    'lib/',
    'babel.config.js',
    'metro.config.js',
    '.eslintrc.js',
    '!/.github'
  ],
  plugins: ['deprecation', 'typescript-sort-keys'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off', // Prefer type inference
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Prefer type inference
    'jest/prefer-inline-snapshots': 'off', // Avoid inlining unreadable RN snapshots
    // React/TS deprecating JSX defaultProps, no typing declared outside class/fn body
    // https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#support-for-defaultprops-in-jsx
    'react/static-property-placement': ['error', 'static public field'],
    'jsx-a11y/accessible-emoji': 'off', // RN TS requires raw text in <Text>, not <span>
    'react/jsx-no-literals': 'off',
    'react/jsx-max-depth': 'off',
    'react-native/no-raw-text': ['error', { skip: 'Text.Text' }], // https://github.com/Intellicode/eslint-plugin-react-native/issues/271
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'deprecation/deprecation': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    'import/prefer-default-export': 'off',
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'App.tsx',
          '**/jest.{config,setup}.js',
          '**/*{.,_}{test,spec}.{ts,tsx}',
          '**/__tests__/**/*.{ts,tsx}',
          '**/storybook/*.ts',
          '**/stories/**/*.tsx'
        ]
      }
    ]
  }
}
