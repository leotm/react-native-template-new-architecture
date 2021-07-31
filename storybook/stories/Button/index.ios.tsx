// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'

import React, { ReactNode } from 'react'
import { TouchableHighlight } from 'react-native'

interface Props {
  children: ReactNode | typeof PropTypes.node
  onPress: () => void | typeof PropTypes.func
}

export default function Button({
  onPress = () => {
    // do nothing.
  },
  children = null
}: Props) {
  return (
    <TouchableHighlight accessibilityRole="button" onPress={onPress}>
      {children}
    </TouchableHighlight>
  )
}
