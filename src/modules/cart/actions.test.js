import {
  addProduct,
  removeProduct,
} from './actions'

describe('Cart actions', () => {
  it('addProduct should create CART/ADD_PRODUCT action', () => {
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

    const expectedAction = {
      type: 'CART/ADD_PRODUCT',
      payload: product,
    }
    expect(addProduct(product)).toEqual(expectedAction)
  })

  it('removeProduct should create CART/REMOVE_PRODUCT action', () => {
    const id = 'dd5ca2b6-b8ae-4627-95f3-7d49613a0df5'
    const sellerId = 're_cjabsxlgq01t5oq6f3ix79dsn'

    const expectedAction = {
      type: 'CART/REMOVE_PRODUCT',
      payload: {
        id,
        sellerId,
      },
    }
    expect(removeProduct(id, sellerId)).toEqual(expectedAction)
  })
})
