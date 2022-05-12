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
  // @ts-expect-error Type 'Requireable<ReactNodeLike>' is not assignable to type 'Validator<ReactNode>'
  children: PropTypes.node
}

export default CenterView
