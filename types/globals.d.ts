import type { Reactotron } from 'reactotron-core-client'
import type { ReactotronReactNative } from 'reactotron-react-native'

declare global {
  interface Console {
    tron: Reactotron & ReactotronReactNative
  }
}
