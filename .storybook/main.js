/**
 * Parsed by sb-rn-get-stories to auto generate storybook.requires.js
 * ES6 mods not (yet) supported, for e.g.
 * main.{ts/mjs}: export default { ... }
 */
module.exports = {
  addons: [
    /**
     * In Storybook v5.3.x, we'd register both device and deviceless addons in rn-addons.js
     * Now in Storybook v6.0b, sb-rn-get-stories auto generates them to storybook.requires.js
     * Deviceless v6.5.x addons supported, deviceless v7.0b addons not yet supported
     * @deprecated @storybook/addon-notes (now @storybook/addon-ondevice-notes)
     * @deprecated @storybook/addon-ondevice-knobs, https://github.com/storybookjs/react-native/pull/406
     */
    '@storybook/addon-ondevice-notes',
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-knobs',
    '@storybook/addon-ondevice-backgrounds',
    '@storybook/addon-ondevice-actions'
  ],
  stories: ['../src/components/**/*.stories.?(ts|tsx)']
}
