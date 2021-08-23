import React, { ReactNode } from 'react'
import { TouchableNativeFeedback } from 'react-native'

interface Props {
  children: ReactNode
  onPress: () => void
}

export default ({
  onPress = () => {
    // do nothing.
  },
  children = null
}: Props) => {
  return (
    <TouchableNativeFeedback accessibilityRole="button" onPress={onPress}>
      {children}
    </TouchableNativeFeedback>
  )
}
