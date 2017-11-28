import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Product from './Product'
import Button from '../../../components/Button'

jest.mock('react-router-dom', () => ({ Link: 'Link' }))

describe('Product', () => {
  let getProduct
  let addProduct
  let removeProduct
  let props
  let match

  beforeEach(() => {
    getProduct = jest.fn()
    addProduct = jest.fn()
    removeProduct = jest.fn()
    match = {
      params: {
        id: '123',
      },
    }

    props = {
      getProduct,
      addProduct,
      removeProduct,
      match,
    }
  })
  it('should render correctly', () => {
    const product = {
      id: 'dd5ca2b6-b8ae-4627-95f3-7d49613a0df5',
      name: 'Abominável (boneco colecionável)',
      price: 80,
      image: 'https://images-na.ssl-images-amazon.com/images/I/A1eI8aYKX%2BL._SL1500_.jpg',
      description: 'description',
      category: 'action figures',
      seller: {
        id: 're_cjabsxlgq01t5oq6f3ix79dsn',
        name: 'João',
      },
    }
    const addedToCart = true

    const tree = renderer
      .create(<Product {...props} addedToCart={addedToCart} product={product} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should call getProducts with match:parms:id when mount', () => {
    const addedToCart = false
    shallow(<Product {...props} addedToCart={addedToCart} />)
    expect(getProduct).toHaveBeenCalledWith('123')
  })
  it('should render button with color green when addedToCart is false', () => {
    const addedToCart = false
    const product = {
      id: 'dd5ca2b6-b8ae-4627-95f3-7d49613a0df5',
      name: 'Abominável (boneco colecionável)',
      price: 80,
      image: 'https://images-na.ssl-images-amazon.com/images/I/A1eI8aYKX%2BL._SL1500_.jpg',
      description: 'description',
      category: 'action figures',
      seller: {
        id: 're_cjabsxlgq01t5oq6f3ix79dsn',
        name: 'João',
      },
    }
    const component = shallow(<Product product={product} {...props} addedToCart={addedToCart} />)
    const button = component.find(Button)
    expect(button.prop('color')).toBe('green')
  })
  it('should call  addProduct when addedToCart is false and button clicked', () => {
    const addedToCart = false
    const product = {
      id: 'dd5ca2b6-b8ae-4627-95f3-7d49613a0df5',
      name: 'Abominável (boneco colecionável)',
      price: 80,
      image: 'https://images-na.ssl-images-amazon.com/images/I/A1eI8aYKX%2BL._SL1500_.jpg',
      description: 'description',
      category: 'action figures',
      seller: {
        id: 're_cjabsxlgq01t5oq6f3ix79dsn',
        name: 'João',
      },
    }
    const component = shallow(<Product product={product} {...props} addedToCart={addedToCart} />)
    component.find(Button).simulate('click')
    expect(addProduct).toHaveBeenCalled()
  })
  it('should render button with color green when addedToCart is false', () => {
    const addedToCart = true
    const product = {
      id: 'dd5ca2b6-b8ae-4627-95f3-7d49613a0df5',
      name: 'Abominável (boneco colecionável)',
      price: 80,
      image: 'https://images-na.ssl-images-amazon.com/images/I/A1eI8aYKX%2BL._SL1500_.jpg',
      description: 'description',
      category: 'action figures',
      seller: {
        id: 're_cjabsxlgq01t5oq6f3ix79dsn',
        name: 'João',
      },
    }
    const component = shallow(<Product product={product} {...props} addedToCart={addedToCart} />)
    const button = component.find(Button)
    expect(button.prop('color')).toBe('grey')
  })
  it('should call  removeProduct when addedToCart is true and button clicked', () => {
    const addedToCart = true
    const product = {
      id: 'dd5ca2b6-b8ae-4627-95f3-7d49613a0df5',
      name: 'Abominável (boneco colecionável)',
      price: 80,
      image: 'https://images-na.ssl-images-amazon.com/images/I/A1eI8aYKX%2BL._SL1500_.jpg',
      description: 'description',
      category: 'action figures',
      seller: {
        id: 're_cjabsxlgq01t5oq6f3ix79dsn',
        name: 'João',
      },
    }
    const component = shallow(<Product product={product} {...props} addedToCart={addedToCart} />)
    component.find(Button).simulate('click')
    expect(removeProduct).toHaveBeenCalled()
  })
})
