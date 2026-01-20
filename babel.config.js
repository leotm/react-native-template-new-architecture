/**
 * metro-react-native-babel-preset includes
 * - @babel/preset-react jsx syntax plugin and transform plugins
 * - @babel/preset-typescript transform plugin
 */

module.exports = {
  /**
   * @lavamoat/react-native-lockdown
   * Avoid transforming SES Hermes (and JSC) shims
   * TODO: https://github.com/endojs/endo/issues/662 upstream
   */
  ignore: [/\/ses\.cjs$/, /\/ses-hermes\.cjs$/],
  presets: [
    'module:@react-native/babel-preset',
    [
      '@babel/preset-react',
      {
        /**
         * runtime: automatic
         * - auto imports fn's JSX transpiles to like React
         * - adds __source and __self props too for debugging
         */
        runtime: 'automatic' // default to classic
        /**
         * development: true
         * - adds __source and __self props too for debugging
         * - can't use with runtime: automatic from dupe props errors
         * - runtime: classic means no auto imports
         */
      }
    ]
  ],
  plugins: [
    [
      /**
       * Allow custom env vars from Metro
       * e.g. RN_ENV=staging react-native start
       * Accessible from process.env.RN_ENV
       */
      'transform-inline-environment-variables'
    ],
    ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }]
    // e.g. 'react-native-reanimated/plugin'
  ]
}
