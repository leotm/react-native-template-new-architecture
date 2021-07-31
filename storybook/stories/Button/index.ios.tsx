// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'

import React, { ReactNode } from 'react'
import { TouchableHighlight } from 'react-native'

interface Props {
  children: ReactNode
  onPress: () => void
}

export default function Button({ onPress, children }: Props) {
  return (
    <TouchableHighlight accessibilityRole="button" onPress={onPress}>
      {children}
    </TouchableHighlight>
  )
}

Button.defaultProps = {
  children: null,
  onPress: () => {}
}

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func
}
