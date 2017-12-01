import sagaHelper from 'redux-saga-testing'
import { put, call, takeLatest } from 'redux-saga/effects'
import { startSubmit, stopSubmit } from 'redux-form'

import checkoutSagas, { doPayment } from './sagas'
import actions from './actions'
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
    const transactionReturn = { id: 1, amount: 100, status: 'paid' }
    const transaction = { id: 1, amount: 1, status: 'paid' }
    const payblesReturn = [
      {
        amount: 100,
        fee: 10,
        recipient_id: 'id',
        payment_date: 'date',
        date_created: 'date',
        status: 'paid',
      },
    ]
    const payables = [
      {
        amount: 1,
        fee: 0.1,
        recipientId: 'id',
        paymentDate: 'date',
        dateCreated: 'date',
        status: 'paid',
      },
    ]
    describe('Scenario 1: When runs ok', () => {
      const it = sagaHelper(doPayment({ payload }))

      it('should put startSubmit', (result) => {
        expect(result).toEqual(put(startSubmit('checkout')))
      })
      it('should call createPayment', (result) => {
        expect(result).toEqual(call(createPayment, { data, cart }))
        return transactionReturn
      })
      it('should call getPayables', (result) => {
        expect(result).toEqual(call(getPayables, transaction.id))
        return payblesReturn
      })
      it('should put addOrder', (result) => {
        expect(result).toEqual(put(orderActions.addOrder({ ...transaction, payables })))
      })
      it('should call push', (result) => {
        expect(result).toEqual(call(push, `/order/${transaction.id}`))
      })
      it('should put removeCart', (result) => {
        expect(result).toEqual(put(removeCart(cart.seller.id)))
      })
      it('and then nothing', (result) => {
        expect(result).toBeUndefined()
      })
    })
    describe('Scenario 2: When throws exception', () => {
      const it = sagaHelper(doPayment({ payload }))

      it('should put startSubmit', (result) => {
        expect(result).toEqual(put(startSubmit('checkout')))
      })
      it('should call createPayment', (result) => {
        expect(result).toEqual(call(createPayment, { data, cart }))
        return new Error('Something went wrong')
      })
      it('should put stopSubmit', (result) => {
        expect(result).toEqual(put(stopSubmit('checkout', { _error: 'Something went wrong' })))
      })
      it('and then nothing', (result) => {
        expect(result).toBeUndefined()
      })
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
