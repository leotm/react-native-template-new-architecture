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
jest.mock('@storybook/react-native', () => ({
  addDecorator: jest.fn(),
  addParameters: jest.fn(),
  configure: jest.fn(),
  getStorybookUI: jest.fn()
}))
// @storybook/addon-ondevice-knobs
jest.mock('@storybook/addon-ondevice-knobs', () => ({
  register: () => jest.fn()
}))
export {}
