import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Cart from './Cart'
import ProductList from './ProductList'

jest.mock('react-router-dom', () => ({ Link: 'Link' }))

describe('Cart', () => {
  it('should render correctly', () => {
    const seller = {
      id: 're_cjabsxlgq01t5oq6f3ix79dsn',
      name: 'João',
    }
    const carts = [{
      seller,
      products: [
        {
          id: 'dd5ca2b6-b8ae-4627-95f3-7d49613a0df5',
          name: 'Abominável',
          price: 80,
          image: 'https://images-na.ssl-images-amazon.com/images/I/A1eI8aYKX%2BL._SL1500_.jpg',
          description: 'description',
          category: 'action figures',
          seller,
        },
      ],
    }]
    const removeProduct = jest.fn()
    const tree = renderer
      .create(<Cart carts={carts} removeProduct={removeProduct} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should have a ProductList to each item in carts property', () => {
    const removeProduct = jest.fn()
    const seller1 = {
      id: 're_cjabsxlgq01t5oq6f3ix79dsn',
      name: 'João',
    }
    const seller2 = {
      id: 're_cjabsxlgq01t5oq6f3ix79abc',
      name: 'Pedro',
    }
    const carts = [
      {
        seller: seller1,
        products: [
          {
            id: 'dd5ca2b6-b8ae-4627-95f3-7d49613a0df5',
            name: 'Abominável',
            price: 80,
            image: 'https://images-na.ssl-images-amazon.com/images/I/A1eI8aYKX%2BL._SL1500_.jpg',
            description: 'description',
            category: 'action figures',
            seller: seller1,
          },
        ],
      },
      {
        seller: seller2,
        products: [
          {
            id: 'dd5ca2b6-b8ae-4627-95f3-7d49613a1234',
            name: 'prod',
            price: 80,
            image: 'https://images.com/1.jpg',
            description: 'description',
            category: 'action figures',
            seller: seller2,
          },
        ],
      },
    ]

    const component = shallow(<Cart removeProduct={removeProduct} carts={carts} />)
    const productsList = component.find(ProductList)
    expect(productsList).toHaveLength(2)
  })

  it('should show the message "Você não possui nenhum produto no carrinho" when carts length equal zero', () => {
    const removeProduct = jest.fn()

    const component = shallow(<Cart removeProduct={removeProduct} carts={[]} />)
    const productsList = component.find('p')
    expect(productsList.text()).toBe('Você não possui nenhum produto no carrinho')
  })
})
