import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import ProductList from './ProductList'
import Product from './Product'

jest.mock('react-router-dom', () => ({ Link: 'Link' }))

describe('ProductList', () => {
  it('should render correctly', () => {
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

    const tree = renderer
      .create(<ProductList getProducts={getProducts} products={products} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should call getProducts when mount', () => {
    const getProducts = jest.fn()
    shallow(<ProductList getProducts={getProducts} />)
    expect(getProducts).toHaveBeenCalled()
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
