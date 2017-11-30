import reducer, { getIsFetching, getProducts, getProductById } from './reducer'
import * as types from './types'
import * as productTypes from '../product/types'

describe('Gallery reducer', () => {
  describe('actions in reducer', () => {
    it('should return initial state as default', () => {
      const initialState = {
        products: [],
        isFetching: false,
      }
      expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should return isFetching true on GALLERY/GET_PRODUCTS', () => {
      const state = {
        products: [],
        isFetching: false,
      }
      const expected = {
        isFetching: true,
        products: [],
      }
      const action = {
        type: types.GET_PRODUCTS,
      }

      expect(reducer(state, action)).toEqual(expected)
    })

    it('should return isFetching true on PRODUCT/PRODUCT_REQUEST', () => {
      const state = {
        products: [],
        isFetching: false,
      }
      const expected = {
        isFetching: true,
        products: [],
      }
      const action = {
        type: productTypes.PRODUCT_REQUEST,
      }

      expect(reducer(state, action)).toEqual(expected)
    })

    it('should return isFetching false on GALLERY/PRODUCTS_FAILURE', () => {
      const state = {
        products: [],
        isFetching: true,
      }
      const expected = {
        isFetching: false,
        products: [],
      }
      const action = {
        type: types.PRODUCTS_FAILURE,
      }

      expect(reducer(state, action)).toEqual(expected)
    })

    it('should return isFetching false on PRODUCT/PRODUCT_FAILURE', () => {
      const state = {
        products: [],
        isFetching: true,
      }
      const expected = {
        isFetching: false,
        products: [],
      }
      const action = {
        type: productTypes.PRODUCT_FAILURE,
      }

      expect(reducer(state, action)).toEqual(expected)
    })

    it('should return the state with products and isFetching false on GALLERY/PRODUCTS_SUCCESS', () => {
      const state = {
        products: [],
        isFetching: true,
      }
      const products = [
        {
          id: 'a12090',
          name: 'a product',
          price: 10,
          image: 'image-url',
          description: 'test',
        },
        {
          id: 'a12091',
          name: 'a product 2',
          price: 12,
          image: 'image-url-2',
          description: 'test-2',
        },
      ]

      const expected = {
        isFetching: false,
        products,
      }
      const action = {
        type: types.PRODUCTS_SUCCESS,
        payload: products,
      }

      expect(reducer(state, action)).toEqual(expected)
    })

    it('should return the state with products adding new product and isFetching false on PRODUCT/PRODUCT_SUCCESS', () => {
      const products = [
        {
          id: 'a12090',
          name: 'a product',
          price: 10,
          image: 'image-url',
          description: 'test',
        },
        {
          id: 'a12091',
          name: 'a product 2',
          price: 12,
          image: 'image-url-2',
          description: 'test-2',
        },
      ]
      const state = {
        isFetching: true,
        products,
      }
      const newProduct = {
        id: 'a3000',
        name: 'a product',
        price: 10,
        image: 'image-url',
        description: 'test',
      }

      const expected = {
        isFetching: false,
        products: [...products, newProduct],
      }
      const action = {
        type: productTypes.PRODUCT_SUCCESS,
        payload: newProduct,
      }

      expect(reducer(state, action)).toEqual(expected)
    })

    it('should return the state with products updating existing product and isFetching false on PRODUCT/PRODUCT_SUCCESS', () => {
      const products = [
        {
          id: 'a12090',
          name: 'a product',
          price: 10,
          image: 'image-url',
          description: 'test',
        },
        {
          id: 'a12091',
          name: 'a product 2',
          price: 12,
          image: 'image-url-2',
          description: 'test-2',
        },
      ]
      const state = {
        isFetching: true,
        products,
      }
      const newProduct = {
        id: 'a12090',
        name: 'a product updated',
        price: 12,
        image: 'image-url',
        description: 'test',
      }

      const expected = {
        isFetching: false,
        products: [
          newProduct,
          {
            id: 'a12091',
            name: 'a product 2',
            price: 12,
            image: 'image-url-2',
            description: 'test-2',
          },
        ],
      }
      const action = {
        type: productTypes.PRODUCT_SUCCESS,
        payload: newProduct,
      }

      expect(reducer(state, action)).toEqual(expected)
    })
  })

  describe('selectors', () => {
    let state

    beforeEach(() => {
      state = {
        products: [
          {
            id: 'a12091',
            name: 'a product 2',
            price: 12,
            image: 'image-url-2',
            description: 'test-2',
          },
        ],
        isFetching: true,
      }
    })

    describe('getIsFetching', () => {
      it('should return isFetching property', () => {
        expect(getIsFetching(state)).toBe(true)
      })
    })

    describe('getProducts', () => {
      it('should return products property', () => {
        const products = [
          {
            id: 'a12091',
            name: 'a product 2',
            price: 12,
            image: 'image-url-2',
            description: 'test-2',
          },
        ]
        expect(getProducts(state)).toEqual(products)
      })

      describe('getProductById', () => {
        it('should return products property', () => {
          const id = 'a12091'
          const product = {
            id: 'a12091',
            name: 'a product 2',
            price: 12,
            image: 'image-url-2',
            description: 'test-2',
          }
          expect(getProductById(state, id)).toEqual(product)
        })
      })
    })
  })
})
