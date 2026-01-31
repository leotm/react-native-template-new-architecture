const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
const { lockdownSerializer } = require('@lavamoat/react-native-lockdown')

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  // watchFolders: [path.resolve(__dirname, '../../')],
  serializer: lockdownSerializer(
    { hermesRuntime: true },
    {
      getPolyfills: () => [
        ...require('@react-native/js-polyfills')(),
        // require.resolve('reflect-metadata'), // Vetted shim example
      ]
    }
  ),
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
    // TODO: Migrate RN Storybook from 6.5.x to 10 (RN 0.71 to 0.83)
    resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main']
  }
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config)
