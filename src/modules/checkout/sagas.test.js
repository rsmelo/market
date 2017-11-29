import { put, call, takeLatest } from 'redux-saga/effects'

import checkoutSagas, { doPayment } from './sagas'
import * as actions from './actions'
import orderActions from '../order/actions'
import { removeCart } from '../cart/actions'

import {
  createPayment,
  getPayables,
} from './api'

describe('Gallery sagas', () => {
  describe('doPayment saga', () => {
    const data = {}
    const cart = {
      seller: {
        id: 1,
      },
    }
    const push = jest.fn()
    const payload = {
      cart,
      data,
      push,
    }
    const generator = doPayment({ payload })
    const transaction = { id: 1 }
    let output

    it('should put paymentRequest', () => {
      output = generator.next().value
      expect(output).toEqual(put(actions.paymentRequest()))
    })

    it('should call createPayment', () => {
      output = generator.next().value
      expect(output).toEqual(call(createPayment, { data, cart }))
    })
    it('should call getPayables', () => {
      output = generator.next(transaction).value
      expect(output).toEqual(call(getPayables, transaction.id))
    })
    it('should put addOrder', () => {
      const payables = []
      output = generator.next(payables).value
      expect(output).toEqual(put(orderActions.addOrder({ ...transaction, payables })))
    })
    it('should put paymentSuccess', () => {
      output = generator.next().value
      expect(output).toEqual(put(actions.paymentSuccess(transaction)))
    })
    it('should put removeCart', () => {
      output = generator.next().value
      expect(output).toEqual(put(removeCart(cart.seller.id)))
    })
    it('should call push', () => {
      output = generator.next(transaction).value
      expect(output).toEqual(call(push, `/order/${transaction.id}`))
    })
  })
  describe('main sagas', () => {
    const generator = checkoutSagas()
    let output

    it('should takeLatest getProducts', () => {
      output = generator.next().value
      expect(output).toEqual(takeLatest(actions.doPayment, doPayment))
    })
  })
})
