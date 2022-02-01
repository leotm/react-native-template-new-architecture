import { FC } from 'react'
import { TouchableNativeFeedback } from 'react-native'

const Button: FC<{ onPress: () => void }> = ({
  onPress = () => {
    // do nothing.
  },
  children = null
}) => {
  return (
    <TouchableNativeFeedback accessibilityRole="button" onPress={onPress}>
      {children}
    </TouchableNativeFeedback>
  )
}

export default Button
