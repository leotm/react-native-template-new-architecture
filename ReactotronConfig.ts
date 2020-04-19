import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';

Reactotron.setAsyncStorageHandler?.(AsyncStorage)
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect();
