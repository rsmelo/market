import reducer, { productExistsInCart } from './reducer'
import * as types from './types'

describe('Cart reducer', () => {
  describe('actions in reducer', () => {
    it('should return initial state as default', () => {
      const initialState = {
        bySeller: {},
      }
      expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should create a new seller cart when CART/ADD_PRODUCT pass a product with a new seller', () => {
      const oneSellerCart = {
        seller: {
          id: 're_cjabsrhv901oxla6fo2g0lfms',
          name: 'Pedro',
        },
        products: [
          {
            id: 'ae5ed437-ebb4-48a8-93c5-83f0bfaf4507',
            name: 'Abominável',
            price: 80,
            image: 'https://images-na.ssl-images-amazon.com/images/I/A1eI8aYKX%2BL._SL1500_.jpg',
            description: 'description',
            category: 'action figures',
            seller: {
              id: 're_cjabsrhv901oxla6fo2g0lfms',
              name: 'Pedro',
            },
          },
        ],
      }
      const state = {
        bySeller: {
          re_cjabsrhv901oxla6fo2g0lfms: oneSellerCart,
        },
      }
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
      const expected = {
        bySeller: {
          re_cjabsrhv901oxla6fo2g0lfms: oneSellerCart,
          re_cjabsxlgq01t5oq6f3ix79dsn: {
            seller: {
              id: 're_cjabsxlgq01t5oq6f3ix79dsn',
              name: 'João',
            },
            products: [product],
          },
        },
      }
      const action = {
        type: types.ADD_PRODUCT,
        payload: product,
      }

      expect(reducer(state, action)).toEqual(expected)
    })

    it('should add new product in seller cart when CART/ADD_PRODUCT pass a product with a existing seller', () => {
      const seller = {
        id: 're_cjabsxlgq01t5oq6f3ix79dsn',
        name: 'João',
      }
      const state = {
        bySeller: {
          re_cjabsxlgq01t5oq6f3ix79dsn: {
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
          },
        },
      }
      const product = {
        id: 'b5e0f729-8a93-4243-9d65-b272582748c5',
        name: 'outro produto',
        price: 90,
        image: 'https://images-na.ssl-images-amazon.com/images/I/81vNqNswHGL._SL1500_.jpg',
        description: 'description',
        category: 'action figures',
        seller,
      }
      const expected = {
        bySeller: {
          re_cjabsxlgq01t5oq6f3ix79dsn: {
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
              product,
            ],
          },
        },
      }
      const action = {
        type: types.ADD_PRODUCT,
        payload: product,
      }

      expect(reducer(state, action)).toEqual(expected)
    })

    it('should remove the product from the seller cart when CART/REMOVE_PRODUCT ', () => {
      const seller = {
        id: 're_cjabsxlgq01t5oq6f3ix79dsn',
        name: 'João',
      }
      const state = {
        bySeller: {
          re_cjabsxlgq01t5oq6f3ix79dsn: {
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
              {
                id: 'b5e0f729-8a93-4243-9d65-b272582748c5',
                name: 'outro produto',
                price: 90,
                image: 'https://images-na.ssl-images-amazon.com/images/I/81vNqNswHGL._SL1500_.jpg',
                description: 'description',
                category: 'action figures',
                seller,
              },
            ],
          },
        },
      }

      const expected = {
        bySeller: {
          re_cjabsxlgq01t5oq6f3ix79dsn: {
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
          },
        },
      }

      const id = 'b5e0f729-8a93-4243-9d65-b272582748c5'
      const sellerId = 're_cjabsxlgq01t5oq6f3ix79dsn'

      const action = {
        type: types.REMOVE_PRODUCT,
        payload: {
          id,
          sellerId,
        },
      }

      expect(reducer(state, action)).toEqual(expected)
    })

    it('should remove the seller cart from state when CART/REMOVE_PRODUCT and products.lenght is equal 0', () => {
      const seller = {
        id: 're_cjabsxlgq01t5oq6f3ix79dsn',
        name: 'João',
      }
      const state = {
        bySeller: {
          re_cjabsxlgq01t5oq6f3ix79dsn: {
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
          },
        },
      }

      const expected = {
        bySeller: {},
      }

      const id = 'dd5ca2b6-b8ae-4627-95f3-7d49613a0df5'
      const sellerId = 're_cjabsxlgq01t5oq6f3ix79dsn'

      const action = {
        type: types.REMOVE_PRODUCT,
        payload: {
          id,
          sellerId,
        },
      }

      expect(reducer(state, action)).toEqual(expected)
    })
  })
  describe('selectors', () => {
    describe('productExistsInCart', () => {
      it('should return true if product exist in cart', () => {
        const seller = {
          id: 're_cjabsxlgq01t5oq6f3ix79dsn',
          name: 'João',
        }
        const state = {
          bySeller: {
            re_cjabsxlgq01t5oq6f3ix79dsn: {
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
            },
          },
        }
        const id = 'dd5ca2b6-b8ae-4627-95f3-7d49613a0df5'
        const sellerId = 're_cjabsxlgq01t5oq6f3ix79dsn'

        expect(productExistsInCart(state, id, sellerId)).toEqual(true)
      })
      it('should return false if the seller cart exist but product is does not exist', () => {
        const seller = {
          id: 're_cjabsxlgq01t5oq6f3ix79dsn',
          name: 'João',
        }
        const state = {
          bySeller: {
            re_cjabsxlgq01t5oq6f3ix79dsn: {
              seller,
              products: [
                {
                  id: 'b5e0f729-8a93-4243-9d65-b272582748c5',
                  name: 'Abominável',
                  price: 80,
                  image: 'https://images-na.ssl-images-amazon.com/images/I/A1eI8aYKX%2BL._SL1500_.jpg',
                  description: 'description',
                  category: 'action figures',
                  seller,
                },
              ],
            },
          },
        }
        const id = 'dd5ca2b6-b8ae-4627-95f3-7d49613a0df5'
        const sellerId = 're_cjabsxlgq01t5oq6f3ix79dsn'

        expect(productExistsInCart(state, id, sellerId)).toEqual(false)
      })
      it('should return false if the seller cart does not exist', () => {
        const state = {
          bySeller: {},
        }
        const id = 'dd5ca2b6-b8ae-4627-95f3-7d49613a0df5'
        const sellerId = 're_cjabsxlgq01t5oq6f3ix79dsn'

        expect(productExistsInCart(state, id, sellerId)).toEqual(false)
      })
    })
  })
})
