import React from 'react'
import { shallow } from 'enzyme'

import ProductList from './ProductList'
import Product from './Product'

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
        id: 'a12090',
        name: 'a product',
        price: 10,
        image: 'image-url',
        description: 'test',
      },
    ]

    shallow(<ProductList getProducts={getProducts} products={products} />)
    expect(getProducts).not.toHaveBeenCalled()
  })

  it('should a Product to each item in products property', () => {
    const getProducts = jest.fn()
    const products = [
      {
        id: 'a12090',
        name: 'a product',
        price: 10,
        image: 'image-url',
        description: 'test',
      },
      {
        id: 'a120902',
        name: 'a product2',
        price: 10,
        image: 'image-url2',
        description: 'test',
      },
    ]

    const component = shallow(<ProductList getProducts={getProducts} products={products} />)
    const productsComponents = component.find(Product)
    expect(productsComponents).toHaveLength(2)
  })
})
