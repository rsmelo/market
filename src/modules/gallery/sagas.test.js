
import { put, call } from 'redux-saga/effects'

import { getProducts } from './sagas'
import * as actions from './actions'
import fetchProducts from './api'

describe('Gallery sagas', () => {
  describe('getProducts saga', () => {
    const generator = getProducts()
    let output

    it('should put productsRequest', () => {
      output = generator.next().value
      expect(output).toEqual(put(actions.productsRequest()))
    })

    it('should call fetchProducts', () => {
      output = generator.next().value
      expect(output).toEqual(call(fetchProducts))
    })

    it('should put productsSuccess with data', () => {
      const data = [
        {
          id: 'a12090',
          name: 'a product',
          price: 10,
          image: 'image-url',
          description: 'test',
        },
      ]
      output = generator.next({ data }).value
      expect(output).toEqual(put(actions.productsSuccess(data)))
    })
  })
})
