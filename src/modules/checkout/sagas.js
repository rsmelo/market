import { takeLatest, put, call } from 'redux-saga/effects'

import * as actions from './actions'
import orderActions from '../order/actions'

import {
  createPayment,
  getPayables,
} from './api'

export function* doPayment ({ payload }) {
  try {
    const { data, cart, push } = payload
    yield put(actions.paymentRequest())
    const transaction = yield call(createPayment, { data, cart })
    yield put(actions.paymentSuccess(transaction))
    const payables = yield call(getPayables, transaction.id)
    yield put(orderActions.addOrder({ ...transaction, payables }))
    push(`/order/${transaction.id}`)
  } catch (error) {
    yield put(actions.paymentFailure(error.message))
  }
}

export default function* sagas () {
  yield takeLatest(actions.doPayment, doPayment)
}
