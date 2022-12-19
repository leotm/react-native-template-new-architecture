module.exports = {
  root: true,
  extends: [
    // All
    'eslint:all', // Pairs well with plugin:react/all
    'plugin:react/all', // Pairs well with eslint:all
    'plugin:@typescript-eslint/all', // Unstable
    'plugin:jest/all', // Unstable
    'plugin:react-native/all',
    // Recommended
    'plugin:import/recommended', // plugin:import/errors + plugin:import/warnings
    'plugin:import/typescript', // This line apaz does the trick - but which pony?
    'plugin:react-hooks/recommended',
    // Misc
    'airbnb-typescript-prettier',
    // 'react-native-typescript', // [ERR_PACKAGE_PATH_NOT_EXPORTED]: Failed to load plugin 'flowtype'
    // '@react-native-community', // [ERR_PACKAGE_PATH_NOT_EXPORTED]: Failed to load plugin 'flowtype'
    // 'plugin:prettier/recommended', // Incompatible with eslint-plugin-yml
    'plugin:yml/prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json', // Required for '@typescript-eslint/await-thenable'
    ecmaVersion: 'latest'
  },
  overrides: [
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
      rules: {
        // TODO: Fix
        'spaced-comment': 'off',
        'yml/flow-sequence-bracket-spacing': ['error', 'always']
      }
    }
  ],
  env: {
    // Extended, but here for visibility
    'react-native/react-native': true,
    'jest/globals': true
  },
  ignorePatterns: [
    'lib',
    'babel.config.js',
    'metro.config.js',
    '.eslintrc.js',
    'webpack.config.js',
    // '!/.github', // False positive: Error loading '@typescript-eslint/await-thenable' requires parserOptions.project
    '!/.storybook',
    '.storybook/storybook.requires.js' // Codegen
  ],
  plugins: [
    'deprecation',
    'simple-import-sort',
    'sort-keys-fix',
    'typescript-sort-keys',
    'communist-spelling'
  ],
  rules: {
    // Misc
    'jsx-a11y/accessible-emoji': 'off', // RN TS requires raw text in <Text>, not <span>
    'deprecation/deprecation': 'error',
    'no-shadow': 'off',
    'communist-spelling/communist-spelling': 'error',
    'react-native/no-color-literals': 'off',
    'react/jsx-props-no-spreading': 'off',
    // Sorts
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
    'sort-vars': 'error',
    'sort-keys-fix/sort-keys-fix': 'error', // sort-keys with autofix
    // @typescript-eslint
    '@typescript-eslint/explicit-function-return-type': 'off', // Prefer type inference
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Prefer type inference
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    /**
     * Auto-fixing/removing unneeded type args is nice,
     * But not false-positive generic type args with React props
     * - class Atom extends Component<{ children: ReactNode, onPress: () => void }>
     * - const Atom = ({ children, onPress }: { children: ReactNode; onPress: () => void }) => <></> // Inferred JSX.Element
     * - const Atom: FC<{ onPress: () => void }>
     * React 17 PropsWithChildren, now removed for generic P in React 18
     */
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
    ],
    // React
    'react/static-property-placement': ['error', 'static public field'], // https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#support-for-defaultprops-in-jsx
    'react/jsx-no-literals': 'off',
    'react/jsx-max-depth': 'off',
    // 'react-native/no-raw-text': ['error', { skip: 'Text.Text' }], // https://github.com/Intellicode/eslint-plugin-react-native/issues/271
    'react/react-in-jsx-scope': 'off',
    'react/no-multi-comp': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    // Jest
    'jest/require-hook': 'off',
    // Imports/Exports
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // 'sort-imports': 'error', // Incompatible w simple-import-sort
    // 'import/order': ['error', { 'newlines-between': 'always' }], // Incompatible w simple-import-sort
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        // Supported: classic.yarnpkg.com/en/docs/dependency-types
        devDependencies: [
          // Unit/E2E tests
          '**/*{.,_}{test,spec}.{ts,tsx}',
          // Snapshot tests (Jest)
          '**/__tests__/**/*.{ts,tsx}', // react-test-renderer
          // Storybook config
          '.storybook/**/*.{ts,tsx,js}',
          // Stories (@storybook/react-native)
          'src/components/**/*.stories.tsx' // v6
        ]
      }
    ]
  }
}
