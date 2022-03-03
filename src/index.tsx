import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { I18nManager } from 'react-native'
import chapters from './chapters.json'
import Chapter from './Chapter'
import HeaderDemo from './HeaderDemo'
import { WHITE } from './colors'

const Stack = createNativeStackNavigator()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerHideBackButton: true,
        direction: I18nManager.isRTL ? 'rtl' : 'ltr'
      }}
    >
      <Stack.Screen
        name="Chapter"
        options={{
          title: 'Fabric Example',
          headerShown: false
        }}
        initialParams={{
          index: 0,
          chapters: chapters,
          chapterRoute: 'Chapter',
          afterChapterRoute: 'HeaderDemo'
        }}
        component={Chapter}
      />
      <Stack.Screen
        name="HeaderDemo"
        component={HeaderDemo}
        options={{ title: 'Header Demo', headerTintColor: WHITE }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App
