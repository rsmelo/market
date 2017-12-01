import sagaHelper from 'redux-saga-testing'
import { put, call, takeLatest } from 'redux-saga/effects'

import productsSagas, { getProduct } from './sagas'
import * as actions from './actions'
import fetchProduct from './api'

describe('Product sagas', () => {
  describe('getProduct saga', () => {
    const payload = { id: '123' }
    describe('Scenario 1: When runs ok', () => {
      const it = sagaHelper(getProduct({ payload }))
      const data = {
        id: 'a12090',
        name: 'a product',
        price: 10,
        image: 'image-url',
        description: 'test',
      }
      it('should call fetchProduct', (result) => {
        expect(result).toEqual(call(fetchProduct, payload))
        return { data }
      })
      it('should put productSuccess with data', () => {
        expect(put(actions.productSuccess(data)))
      })
      it('and then nothing', (result) => {
        expect(result).toBeUndefined()
      })
    })
    describe('Scenario 2: When throws exception', () => {
      const it = sagaHelper(getProduct({ payload }))

      it('should call fetchProduct', (result) => {
        expect(result).toEqual(call(fetchProduct, payload))
        return new Error('Something went wrong')
      })
      it('should call productFailure', (result) => {
        expect(result).toEqual(put(actions.productFailure('Something went wrong')))
      })
      it('and then nothing', (result) => {
        expect(result).toBeUndefined()
      })
    })
  })
  describe('getProduct saga', () => {

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
