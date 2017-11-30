import {
  getProducts,
  productsSuccess,
  productsFailure,
} from './actions'

describe('Gallery actions', () => {
  it('getProducts should create GALLERY/GET_PRODUCTS action', () => {
    const expectedAction = {
      type: 'GALLERY/GET_PRODUCTS',
    }
    expect(getProducts()).toEqual(expectedAction)
  })

  it('productsSuccess should create GALLERY/PRODUCTS_SUCCESS action', () => {
    const data = [
      {
        id: 'a12090',
        name: 'a product',
        price: 10,
        image: 'image-url',
      },
    ]
    const expectedAction = {
      type: 'GALLERY/PRODUCTS_SUCCESS',
      payload: data,
    }
    expect(productsSuccess(data)).toEqual(expectedAction)
  })

  it('productsFailure should create GALLERY/PRODUCTS_FAILURE action', () => {
    const error = new Error('a message')
    const expectedAction = {
      type: 'GALLERY/PRODUCTS_FAILURE',
      payload: error,
      error: true,
    }
    expect(productsFailure(error)).toEqual(expectedAction)
  })
})
