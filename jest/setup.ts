// eslint-disable-next-line import/no-extraneous-dependencies
import { jest } from '@jest/globals'
import type StorybookAddonOnDeviceControls from '@storybook/addon-ondevice-controls'
import type StorybookRN from '@storybook/react-native'
// import React from 'react'
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'

/**
 * Mocks
 */

jest.mock<typeof mockSafeAreaContext>(
  'react-native-safe-area-context',
  () => mockSafeAreaContext
)

// e.g. another mock
// jest.mock<string>('react-native-modal-selector', () => 'ModalSelector')

// e.g. another mock
// jest.mock<string>(
//   'react-native-modal-datetime-picker',
//   () => 'DateTimePickerModal'
// )

// NB: React expects a string (for built-in components) or a class/function (for composite components)
// https://jestjs.io/docs/tutorial-react-native#mock-native-modules-using-jestmock
// Which parse correctly in snapshots as e.g. <DateTimePickerModal ... />
// Otherwise we'd ideally type our generics properly (like below) as e.g. jest.mock<DateTimePickerModal>(...)
// TODO: Consider extending Jest core or Jest RN addon to allow this functionality i.e. stricter accurate generics

/**
 * React Native Storybook Mocks
 * TODO: Migrate RN Storybook from 6.5.x to 10 (RN 0.71 to 0.83)
 */

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

// const StorybookUIRootComponent = () => React.createElement('StorybookUIRoot')
// @ts-expect-error - return string for getStorybookUI snapshot, avoid unnecessary React.createElement merely to satisfy type
jest.mock<StorybookRNPicked>('@storybook/react-native', () => ({
  addArgTypesEnhancer: jest.fn(),
  addDecorator: jest.fn(),
  addParameters: jest.fn(),
  clearDecorators: jest.fn(),
  configure: jest.fn(),
  getStorybookUI: jest.fn(() => 'StorybookUIRoot')
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
