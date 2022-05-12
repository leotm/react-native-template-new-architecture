import { action } from '@storybook/addon-actions'
import { text, withKnobs } from '@storybook/addon-knobs'
import { linkTo } from '@storybook/addon-links'
import { storiesOf } from '@storybook/react-native'
import { Text } from 'react-native'

// eslint-disable-next-line import/extensions, import/no-unresolved
import Button from './Button'
import CenterView from './CenterView'
import Welcome from './Welcome'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>{text('title', 'Button Title')}</Text>
    </Button>
  ))
  .add(
    'with some emoji',
    () => (
      <Button onPress={action('clicked-emoji')}>
        <Text>😀 😎 👍 💯</Text>
      </Button>
    ),
    { notes: 'A small component' }
  )
