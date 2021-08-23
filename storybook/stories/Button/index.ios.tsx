import React, { ReactNode } from 'react'
import { TouchableHighlight } from 'react-native'

interface Props {
  children: ReactNode
  onPress: () => void
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
