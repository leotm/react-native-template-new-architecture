// TODO: Migrate to @testing-library/react
/* eslint-disable @typescript-eslint/no-deprecated */
/* eslint-disable deprecation/deprecation */

// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, it } from '@jest/globals'
import React from 'react'
import ReactTestRenderer from 'react-test-renderer'

import App from '../src'

describe('app', () => {
  it('renders correctly', async () => {
    expect.hasAssertions()
    expect.assertions(2)

    let component = null
    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(<App />)
    })

    expect(component).toBeDefined()
    expect(component).not.toBeNull()
  })

  it('matches snapshot', async () => {
    expect.hasAssertions()
    expect.assertions(1)

    let component: ReactTestRenderer.ReactTestRenderer | null = null
    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(<App />)
    })
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const componentJSON = component!.toJSON()

    expect(componentJSON).toMatchSnapshot()
  })
})
