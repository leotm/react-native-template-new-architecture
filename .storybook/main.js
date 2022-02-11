/**
 * @storybook/react-native/scripts (loader.js)
 * ES6 mods not (yet) supported, for e.g.
 * main.{ts/mjs}: export default { ... }
 */
module.exports = {
  addons: [
    /**
     * The old way was to register these directly in v5.3
     * Now get-stories codegens them to storybook.requires.js
     * We used to import the deviceless addons too, now only dev/peerDeps
     * (All are still direct dependencies of @storybook/addons)
     * @deprecated @storybook/addon-notes (now @storybook/addon-ondevice-notes)
     * @todo @storybook/addon-links example then PR to storybookjs/react-native
     */
    '@storybook/addon-ondevice-actions', // dev/peerDep @storybook/addon-actions
    '@storybook/addon-ondevice-backgrounds',
    '@storybook/addon-ondevice-controls', // devDep @storybook/addon-knobs, peerDep @storybook/addon-controls
    '@storybook/addon-ondevice-notes', // NB: https://github.com/storybookjs/react-native/issues/24#issuecomment-615934280
    /**
     * NB: Docs 12mo OOD w 404 example, get working then PR update
     * Should be pos since @storybook/addon-ondevice-knobs@npm:next resolving to 6.0.0-alpha.0
     * https://storybook.js.org/addons/@storybook/addon-ondevice-knobs
     * @todo @storybook/addon-ondevice-knobs example then PR to storybookjs/react-native
     */
    '@storybook/addon-ondevice-knobs'
  ],
  stories: ['../src/components/**/*.stories.?(ts|tsx)']
}
