import React from 'react'
import { shallow } from 'enzyme'

import Gallery from './Gallery'
import ProductList from '../ProductList'

describe('Gallery', () => {
  it('should have a ProductList', () => {
    const component = shallow(<Gallery />)
    const productList = component.find(ProductList)
    expect(productList).toHaveLength(1)
  })
})
