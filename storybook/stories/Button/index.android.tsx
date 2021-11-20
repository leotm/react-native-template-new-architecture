import { ReactNode } from 'react'
import { TouchableNativeFeedback } from 'react-native'

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
    <TouchableNativeFeedback accessibilityRole="button" onPress={onPress}>
      {children}
    </TouchableNativeFeedback>
  )
}

export default Button
