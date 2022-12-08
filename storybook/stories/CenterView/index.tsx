// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import type { FC, ReactNode } from 'react'
import { View } from 'react-native'

import style from './style'

const CenterView: FC<{ children: ReactNode }> = ({ children }) => {
  return <View style={style.main}>{children}</View>
}

CenterView.defaultProps = {
  children: null
}

CenterView.propTypes = {
  children: PropTypes.node
}

export default CenterView
