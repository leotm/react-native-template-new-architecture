import { NewAppScreen } from '@react-native/new-app-screen'
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native'
import {
  SafeAreaProvider,
  useSafeAreaInsets
} from 'react-native-safe-area-context'

// TODO: Migrate RN Storybook from 6.5.x to 10 (RN 0.71 to 0.83)
// import StorybookUIRoot from '../.storybook/Storybook'

// TODO: Fix Error Unable to resolve module react-native/Libraries/Network/XHRInterceptor from .../node_modules/reactotron-react-native/dist/index.js:
// react-native/Libraries/Network/XHRInterceptor could not be found within the project or in these directories: node_modules
// if (__DEV__) {
//   import('../ReactotronConfig')
//     .then(() => {
//       // eslint-disable-next-line no-console
//       console.log('Reactotron Configured')
//     })
//     // eslint-disable-next-line no-console
//     .catch(() => console.error)
// }

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  )
}

const AppContent = () => {
  const safeAreaInsets = useSafeAreaInsets()

  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName="src/index.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App // Or StorybookUIRoot

// export default Reactotron.storybookSwitcher(storybook)(App)
// https://github.com/infinitered/reactotron/issues/1160
