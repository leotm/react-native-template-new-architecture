import 'react-native'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

import { App } from '../src'

describe('app', () => {
  it('renders correctly', () => {
    expect.assertions(1)
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
