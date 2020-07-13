// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import React from 'react';
import { TouchableNativeFeedback } from 'react-native';

interface Props {
  children: JSX.Element;
  onPress: () => void;
}

export default function Button({ onPress, children }: Props) {
  return (
    <TouchableNativeFeedback accessibilityRole="button" onPress={onPress}>
      {children}
    </TouchableNativeFeedback>
  );
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
