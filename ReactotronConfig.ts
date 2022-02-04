import AsyncStorage from '@react-native-async-storage/async-storage'
// eslint-disable-next-line import/no-extraneous-dependencies
import Reactotron from 'reactotron-react-native'

Reactotron.setAsyncStorageHandler?.(AsyncStorage)
  .configure() // controls connection & communication settings
  .useReactNative({
    storybook: true
  }) // add all built-in react native plugins
  .connect()

console.tron = Reactotron
