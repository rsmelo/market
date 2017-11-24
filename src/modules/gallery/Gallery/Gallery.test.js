import React from 'react'
import renderer from 'react-test-renderer'

import Gallery from './Gallery'

jest.mock('../ProductList', () => 'ProductList')

describe('Gallery', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Gallery />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
