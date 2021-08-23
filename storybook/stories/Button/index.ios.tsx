import React, { ReactNode } from 'react'
import { TouchableHighlight } from 'react-native'

interface Props {
  children: ReactNode
  onPress: () => void
}

const Button = ({
  onPress = () => {
    // do nothing.
  },
  children = null
}: Props) => {
  return (
    <TouchableHighlight accessibilityRole="button" onPress={onPress}>
      {children}
    </TouchableHighlight>
  )
}

export default Button
