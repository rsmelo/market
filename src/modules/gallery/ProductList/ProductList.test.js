import React from 'react'
import { shallow } from 'enzyme'

import ProductList from './ProductList'

describe('ProductList', () => {
  it('should call getProducts when property products is not passed', () => {
    const getProducts = jest.fn()
    shallow(<ProductList getProducts={getProducts} />)
    expect(getProducts).toHaveBeenCalled()
  })

  it('should not call getProducts when property products is passed', () => {
    const getProducts = jest.fn()
    const products = [
      {
        name: 'a product',
        description: 'the amazing product',
        price: 10,
      },
    ]

    shallow(<ProductList getProducts={getProducts} products={products} />)
    expect(getProducts).not.toHaveBeenCalled()
  })
})
