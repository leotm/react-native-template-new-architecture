jest.mock('react-native-modal-selector', () => null)
jest.mock('react-native-modal-datetime-picker', () => null)
jest.mock('react-native-simple-markdown', () => null)
jest.mock('@react-native-community/async-storage', () => ({
  useAsyncStorage: () => ({
    getItem: jest.fn(),
    setItem: jest.fn()
  })
}))
jest.mock('react-native-swipe-gestures', () => null)
jest.mock('@storybook/react-native', () => ({
  getStorybookUI: jest.fn(),
  addDecorator: jest.fn(),
  configure: jest.fn()
}))
jest.mock('react-native/Libraries/LogBox/LogBox')

export {}
