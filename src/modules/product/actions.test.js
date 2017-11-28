import {
  getProduct,
  productRequest,
  productSuccess,
  productFailure,
} from './actions'

describe('Product actions', () => {
  it('getProduct should create PRODUCT/GET_PRODUCT action', () => {
    const expectedAction = {
      type: 'PRODUCT/GET_PRODUCT',
    }
    expect(getProduct()).toEqual(expectedAction)
  })

  it('productRequest should create PRODUCT/PRODUCT_REQUEST action', () => {
    const expectedAction = {
      type: 'PRODUCT/PRODUCT_REQUEST',
    }
    expect(productRequest()).toEqual(expectedAction)
  })

  it('productSuccess should create PRODUCT/PRODUCT_SUCCESS action', () => {
    const data = [
      {
        id: 'a12090',
        name: 'a product',
        price: 10,
        image: 'image-url',
      },
    ]
    const expectedAction = {
      type: 'PRODUCT/PRODUCT_SUCCESS',
      payload: data,
    }
    expect(productSuccess(data)).toEqual(expectedAction)
  })

  it('productFailure should create PRODUCT/PRODUCT_FAILURE action', () => {
    const error = new Error('a message')
    const expectedAction = {
      type: 'PRODUCT/PRODUCT_FAILURE',
      payload: error,
      error: true,
    }
    expect(productFailure(error)).toEqual(expectedAction)
  })
})
