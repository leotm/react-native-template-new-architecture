/**
 * @storybook/react-native/scripts (loader.js)
 * ES6 mods not (yet) supported, for e.g.
 * main.{ts/mjs}: export default { ... }
 */
module.exports = {
  stories: [],
  addons: [
    '@storybook/addon-ondevice-actions',
    '@storybook/addon-ondevice-backgrounds',
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-notes' // NB: https://github.com/storybookjs/react-native/issues/24#issuecomment-615934280
  ]
}
