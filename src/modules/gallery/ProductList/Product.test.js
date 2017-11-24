import React from 'react'
import renderer from 'react-test-renderer'

import Product from './Product'

jest.mock('react-router-dom', () => ({ Link: 'Link' }))

describe('Product', () => {
  let props

  beforeEach(() => {
    props = {
      id: 'a12090',
      name: 'a product',
      price: 10,
      image: 'image-url',
    }
  })

  it('renders correctly', () => {
    const tree = renderer
      .create(<Product {...props} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
