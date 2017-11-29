import { put, call, takeLatest } from 'redux-saga/effects'

import productsSagas, { getProduct } from './sagas'
import * as actions from './actions'
import fetchProduct from './api'

describe('Gallery sagas', () => {
  describe('getProduct saga', () => {
    const payload = { id: '123' }
    const generator = getProduct({ payload })
    let output

    it('should put productRequest', () => {
      output = generator.next().value
      expect(output).toEqual(put(actions.productRequest()))
    })

    it('should call fetchProduct', () => {
      output = generator.next(payload).value
      expect(output).toEqual(call(fetchProduct, payload))
    })

    it('should put productSuccess with data', () => {
      const data = {
        id: 'a12090',
        name: 'a product',
        price: 10,
        image: 'image-url',
        description: 'test',
      }
      output = generator.next({ data }).value
      expect(output).toEqual(put(actions.productSuccess(data)))
    })
  })
  describe('main sagas', () => {
    const generator = productsSagas()
    let output

    it('should takeLatest getProduct', () => {
      output = generator.next().value
      expect(output).toEqual(takeLatest(actions.getProduct, getProduct))
    })
  })
})
