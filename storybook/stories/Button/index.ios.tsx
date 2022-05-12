import type { FC, ReactNode } from 'react'
import { TouchableHighlight } from 'react-native'

const Button: FC<{ children: ReactNode; onPress: () => void }> = ({
  onPress = () => {
    // do nothing.
  },
  children = null
}) => {
  return (
    <TouchableHighlight accessibilityRole="button" onPress={onPress}>
      {children}
    </TouchableHighlight>
  )
}

export default Button
