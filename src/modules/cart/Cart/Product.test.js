import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Product from './Product'
import Button from '../../../components/Button'

jest.mock('react-router-dom', () => ({ Link: 'Link' }))

describe('Product', () => {
  it('should render correctly', () => {
    const product = {
      id: 'dd5ca2b6-b8ae-4627-95f3-7d49613a0df5',
      name: 'Abominável',
      price: 80,
      image: 'https://images-na.ssl-images-amazon.com/images/I/A1eI8aYKX%2BL._SL1500_.jpg',
      description: 'description',
      category: 'action figures',
      seller: {
        id: 're_cjabsxlgq01t5oq6f3ix79dsn',
        name: 'João',
      },
    }
    const removeProduct = jest.fn()
    const tree = renderer
      .create(<Product {...product} onRemove={removeProduct} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should have a Product to each item in products property', () => {
    const product = {
      id: 'dd5ca2b6-b8ae-4627-95f3-7d49613a0df5',
      name: 'Abominável',
      price: 80,
      image: 'https://images-na.ssl-images-amazon.com/images/I/A1eI8aYKX%2BL._SL1500_.jpg',
      description: 'description',
      category: 'action figures',
      seller: {
        id: 're_cjabsxlgq01t5oq6f3ix79dsn',
        name: 'João',
      },
    }
    const removeProduct = jest.fn()
    const component = shallow(<Product {...product} onRemove={removeProduct} />)
    component.find(Button).simulate('click')
    expect(removeProduct).toHaveBeenCalledWith(product.id, product.seller.id)
  })
})
