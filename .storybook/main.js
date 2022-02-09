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
    '@storybook/addon-ondevice-notes', // NB: https://github.com/storybookjs/react-native/issues/24#issuecomment-615934280
    /**
     * NB: Docs 12mo OOD w 404 example, get working then PR update
     * Should be pos since @storybook/addon-ondevice-knobs@npm:next resolving to 6.0.0-alpha.0
     * https://storybook.js.org/addons/@storybook/addon-ondevice-knobs
     */
    '@storybook/addon-ondevice-knobs'
  ]
}
