jest.mock('@storybook/react-native', () => ({
  addDecorator: jest.fn(),
  configure: jest.fn(),
  getStorybookUI: jest.fn()
}))
jest.mock('@storybook/addon-ondevice-controls', () => ({
  register: () => jest.fn()
}))
jest.mock('@storybook/addon-ondevice-notes', () => ({
  /**
   * TODO: Figure why Jest unable to mock this
   * It's import in codegen'ed storybook.requires.js commented for snaphot till then
   */
  register: () => jest.fn()
}))
jest.mock('@storybook/addon-actions/dist/modern/preset/addArgs', () => ({
  argsEnhancers: {
    /**
     * TODO: Figure why Jest unable to parse Array.prototype.forEach()
     * e.g. argsEnhancers: []
     * Jest config likely needs ES version bump or polyfill
     */
    forEach: jest.fn()
  }
}))
jest.mock('@storybook/react-native', () => ({
  addDecorator: jest.fn(),
  addParameters: jest.fn(),
  configure: jest.fn(),
  getStorybookUI: jest.fn()
}))
export {}
