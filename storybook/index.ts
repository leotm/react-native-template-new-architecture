import './rn-addons'

import AsyncStorage from '@react-native-community/async-storage'
import { getStorybookUI, configure } from '@storybook/react-native'
import { Params } from '@storybook/react-native/dist/preview'

import { AppRegistry, YellowBox } from 'react-native'

configure(() => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  require('./stories').default
}, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: AsyncStorage as Params['asyncStorage']
})

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot)

export default StorybookUIRoot

// https://github.com/storybookjs/storybook/issues/3348#issuecomment-626730717
YellowBox.ignoreWarnings(['Story with id'])
