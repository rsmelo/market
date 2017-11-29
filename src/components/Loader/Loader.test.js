import React from 'react'
import renderer from 'react-test-renderer'

import Loader from './index'

jest.mock('react-router-dom', () => ({ Link: 'Link' }))

describe('Loader', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Loader />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
