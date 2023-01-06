import type StorybookAddonOnDeviceControls from '@storybook/addon-ondevice-controls'
import type StorybookRN from '@storybook/react-native'
// import type DateTimePickerModal from 'react-native-modal-datetime-picker'

// Types (Pick'ed since Partial's remain type unsafe)

type StorybookRNPicked = Pick<
  typeof StorybookRN,
  | 'addDecorator'
  | 'addParameters'
  | 'clearDecorators'
  | 'configure'
  | 'getStorybookUI'
>

type StorybookAddonOnDeviceControlsPicked = Pick<
  typeof StorybookAddonOnDeviceControls,
  'register'
>

// Mocks

jest.mock<StorybookRNPicked>('@storybook/react-native', () => ({
  addArgTypesEnhancer: jest.fn(),
  addDecorator: jest.fn(),
  addParameters: jest.fn(),
  clearDecorators: jest.fn(),
  configure: jest.fn(),
  getStorybookUI: jest.fn()
}))

jest.mock<StorybookAddonOnDeviceControlsPicked>(
  '@storybook/addon-ondevice-controls',
  () => ({
    register: jest.fn()
  })
)

// No type declaration file
jest.mock<jest.Mock>('@storybook/addon-ondevice-notes/register', () =>
  jest.fn()
)
jest.mock<jest.Mock>(
  '@storybook/react/dist/modern/client/docs/extractArgTypes',
  () => jest.fn()
)
jest.mock<jest.Mock>(
  '@storybook/addon-actions/dist/modern/preset/addArgs',
  () => jest.fn()
)

// From @storybook/addon-ondevice-controls and @storybook/addon-ondevice-knobs
jest.mock<string>('react-native-modal-selector', () => 'ModalSelector')
jest.mock<string>(
  'react-native-modal-datetime-picker',
  () => 'DateTimePickerModal'
)

// NB: React expects a string (for built-in components) or a class/function (for composite components)
// https://jestjs.io/docs/tutorial-react-native#mock-native-modules-using-jestmock
// Which parse correctly in snapshots as e.g. <DateTimePickerModal ... />
// Otherwise we'd ideally type our generics properly (above Pick types) as e.g. jest.mock<DateTimePickerModal>(...)
// TODO: Consider extending Jest core or Jest RN addon to allow this functionality i.e. stricter accurate generics
