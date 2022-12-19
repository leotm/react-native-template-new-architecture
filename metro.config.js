/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 */
// const path = require('path')

module.exports = {
  // watchFolders: [path.resolve(__dirname, '../../')],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        /**
         * "If you are brave, turn the two flags to `true` which may bring significant perf improvements"
         * More: https://github.com/zertosh/babel-plugin-transform-inline-imports-commonjs#details
         * May require disabling with other libraries like Storybook, React Navigation, etc until supported.
         */
        experimentalImportSupport: true,
        inlineRequires: true
      }
    })
  },
  resolver: {
    resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main']
  }
}
