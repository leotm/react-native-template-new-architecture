/**
 * ES6 mods not (yet) supported for typed .tsx
 * Preserve .js ext for correct storybook.requires.js codegen
 */

// import { FC } from 'react'
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import { StyleSheet, View } from 'react-native'
// import type { DecoratorFunction } from '@storybook/addon-actions'

/**
 * @type decorators: DecoratorFunction[]
 * @type StoryFn: FC
 */
export const decorators = [
  StoryFn => (
    // eslint-disable-next-line react/jsx-filename-extension
    <View style={styles.container}>
      <StoryFn />
    </View>
  ),
  withBackgrounds
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'plain',
    values: [
      { name: 'plain', value: 'white' },
      { name: 'warm', value: 'hotpink' },
      { name: 'cool', value: 'deepskyblue' }
    ]
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  my_param: 'anything'
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 8 }
})
