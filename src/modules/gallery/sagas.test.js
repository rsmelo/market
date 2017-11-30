import sagaHelper from 'redux-saga-testing'
import { put, call, takeLatest } from 'redux-saga/effects'

import gallerySagas, { getProducts } from './sagas'
import * as actions from './actions'
import fetchProducts from './api'

describe('Gallery sagas', () => {
  describe('getProducts saga', () => {
    describe('Scenario 1: When runs ok', () => {
      const data = [
        {
          id: 'a12090',
          name: 'a product',
          price: 10,
          image: 'image-url',
          description: 'test',
        },
      ]
      const it = sagaHelper(getProducts())

      it('should call fetchProducts', (result) => {
        expect(result).toEqual(call(fetchProducts))
        return { data }
      })
      it('should put productsSuccess with data', () => {
        expect(put(actions.productsSuccess(data)))
      })
      it('and then nothing', (result) => {
        expect(result).toBeUndefined()
      })
    })
    describe('Scenario 2: When throws exception', () => {
      const it = sagaHelper(getProducts())

      it('should call fetchProducts', (result) => {
        expect(result).toEqual(call(fetchProducts))
        return new Error('Something went wrong')
      })
      it('should call productsFailure', (result) => {
        expect(result).toEqual(put(actions.productsFailure('Something went wrong')))
      })
      it('and then nothing', (result) => {
        expect(result).toBeUndefined()
      })
    })
  })
  describe('main sagas', () => {
    const generator = gallerySagas()
    let output

    it('should takeLatest getProducts', () => {
      output = generator.next().value
      expect(output).toEqual(takeLatest(actions.getProducts, getProducts))
    })
  })
})
