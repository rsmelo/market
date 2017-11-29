import { takeLatest, put, call } from 'redux-saga/effects'
import { stopSubmit } from 'redux-form'

import * as actions from './actions'
import orderActions from '../order/actions'
import { removeCart } from '../cart/actions'

import {
  createPayment,
  getPayables,
} from './api'

export function* doPayment ({ payload }) {
  try {
    const { data, cart, push } = payload
    yield put(actions.paymentRequest())
    const transaction = yield call(createPayment, { data, cart })
    const payables = yield call(getPayables, transaction.id)
    yield put(orderActions.addOrder({ ...transaction, payables }))
    yield put(actions.paymentSuccess(transaction))
    yield put(removeCart(cart.seller.id))
    yield call(push, `/order/${transaction.id}`)
  } catch (error) {
    yield put(actions.paymentFailure(error.message))
    yield put(stopSubmit('checkout', { _error: error.message }))
  }
}

export default function* sagas () {
  yield takeLatest(actions.doPayment, doPayment)
}
