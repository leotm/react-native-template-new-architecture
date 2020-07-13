import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react-native';

import React from 'react';
import { Text } from 'react-native';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: () => React.Component) => (
    <CenterView>{getStory()}</CenterView>
  ))
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
    { notes: 'A small component' },
  );
