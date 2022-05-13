/* eslint-disable react-native/no-raw-text, no-console */
// https://github.com/Intellicode/eslint-plugin-react-native/issues/271

import type { FC, ReactNode } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native'
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen'

// TODO: Fix Storybook v6.0.1-alpha.7 crash and upgrade to v6.0.1-beta.6
import _StorybookUIRoot from '../.storybook/Storybook'

if (__DEV__) {
  import('../ReactotronConfig')
    .then(() => {
      console.log('Reactotron Configured')
    })
    .catch(() => console.error)
}

const Section: FC<{ children: ReactNode; title: string }> = ({
  children,
  title
}) => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          { color: isDarkMode ? Colors.white : Colors.black }
        ]}
      >
        {title}
      </Text>

      <Text
        style={[
          styles.sectionDescription,
          { color: isDarkMode ? Colors.light : Colors.dark }
        ]}
      >
        {children}
      </Text>
    </View>
  )
}

export const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Header />

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white
          }}
        >
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>

          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>

          <Section title="Debug">
            <DebugInstructions />
          </Section>

          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>

          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 8
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600'
  }
})

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, no-constant-condition
export default App // Or StorybookUIRoot

// export default Reactotron.storybookSwitcher(storybook)(App)
// https://github.com/infinitered/reactotron/issues/1160
