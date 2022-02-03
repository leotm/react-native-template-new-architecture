// TODO: .ts
import { View, StyleSheet } from 'react-native'
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'

export const decorators = [
  StoryFn => (
    <View style={styles.container}>
      <StoryFn />
    </View>
  ),
  withBackgrounds
]
export const parameters = {
  some_param: 'some value',
  backgrounds: [
    { name: 'plain', value: 'white', default: true },
    { name: 'warm', value: 'hotpink' },
    { name: 'cool', value: 'deepskyblue' }
  ]
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 8 }
})
