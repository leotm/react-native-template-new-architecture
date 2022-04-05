// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  showApp: () => void
}

const styles = StyleSheet.create({
  content: {
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 10
  },
  header: {
    fontSize: 18,
    marginBottom: 18
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    padding: 24
  }
})

// eslint-disable-next-line react/require-optimization
export default class Welcome extends Component<Props> {
  static propTypes = { showApp: PropTypes.func }

  static defaultProps = { showApp: null }

  // eslint-disable-next-line react/no-unused-class-component-methods
  showApp = (event: React.UIEvent) => {
    const { showApp } = this.props
    event.preventDefault()

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/no-unnecessary-condition
    if (showApp) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      showApp()
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.header}>Welcome to React Native Storybook</Text>

        <Text style={styles.content}>
          This is a UI Component development environment for your React Native
          app. Here you can display and interact with your UI components as
          stories. A story is a single state of one or more UI components. You
          can have as many stories as you want. In other words a story is like a
          like a visual test case.
        </Text>

        <Text style={styles.content}>
          We have added some stories inside the `storybook/stories` directory
          for examples. Try editing the `storybook/stories/Welcome.js` file to
          edit this message.
        </Text>
      </View>
    )
  }
}
