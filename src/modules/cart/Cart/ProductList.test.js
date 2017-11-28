import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import ProductList from './ProductList'
import Product from './Product'

jest.mock('react-router-dom', () => ({ Link: 'Link' }))

describe('ProductList', () => {
  it('should render correctly', () => {
    const seller = {
      id: 're_cjabsxlgq01t5oq6f3ix79dsn',
      name: 'João',
    }
    const products = [
      {
        id: 'dd5ca2b6-b8ae-4627-95f3-7d49613a0df5',
        name: 'Abominável',
        price: 80,
        image: 'https://images-na.ssl-images-amazon.com/images/I/A1eI8aYKX%2BL._SL1500_.jpg',
        description: 'description',
        category: 'action figures',
        seller,
      },
    ]
    const removeProduct = jest.fn()
    const tree = renderer
      .create(<ProductList products={products} removeProduct={removeProduct} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should have a Product to each item in products property', () => {
    const removeProduct = jest.fn()
    const seller = {
      id: 're_cjabsxlgq01t5oq6f3ix79dsn',
      name: 'João',
    }
    const products = [
      {
        id: 'a12090',
        name: 'a product',
        price: 10,
        image: 'image-url',
        description: 'test',
        seller,
      },
      {
        id: 'a120902',
        name: 'a product2',
        price: 10,
        image: 'image-url2',
        description: 'test',
        seller,
      },
    ]

    const component = shallow(<ProductList removeProduct={removeProduct} products={products} />)
    const productElements = component.find(Product)
    expect(productElements).toHaveLength(2)
  })
})
