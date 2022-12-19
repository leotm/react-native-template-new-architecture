jest.mock('@storybook/react-native', () => ({
  addDecorator: jest.fn(),
  addParameters: jest.fn(),
  clearDecorators: jest.fn(),
  configure: jest.fn(),
  getStorybookUI: jest.fn()
}))
jest.mock('@storybook/addon-ondevice-notes/register', () => ({}))
jest.mock('@storybook/addon-ondevice-controls', () => ({
  register: () => jest.fn()
}))
jest.mock('@storybook/addon-ondevice-knobs', () => ({
  register: () => jest.fn()
}))
jest.mock('@storybook/addon-actions', () => ({
  register: () => jest.fn()
}))
jest.mock('@storybook/addon-actions/dist/modern/preset/addArgs', () => ({
  argsEnhancers: {
    // Jest now parsing Array.prototype.forEach()
    // forEach: jest.fn(), no longer needed
  }
}))
export {}
