import { put, call, takeLatest } from 'redux-saga/effects'

import checkoutSagas, { doPayment } from './sagas'
import * as actions from './actions'
import orderActions from '../order/actions'
import { removeCart } from '../cart/actions'

import {
  createPayment,
  getPayables,
} from './api'

describe('Checkout sagas', () => {
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
    const transaction = { id: 1, amount: 100, status: 'paid' }
    let output

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
      const parsedTransaction = { id: 1, amount: 1, status: 'paid' }
      expect(output).toEqual(put(orderActions.addOrder({ ...parsedTransaction, payables })))
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
