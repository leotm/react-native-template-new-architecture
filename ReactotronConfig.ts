import AsyncStorage from '@react-native-community/async-storage';
// eslint-disable-next-line import/no-extraneous-dependencies
import Reactotron from 'reactotron-react-native';

Reactotron.setAsyncStorageHandler?.(AsyncStorage)
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect();
