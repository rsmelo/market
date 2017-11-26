import { takeLatest, put, call } from 'redux-saga/effects'

import * as actions from './actions'
import createPayment from './api'

export function* doPayment ({ payload }) {
  try {
    yield put(actions.paymentRequest())
    const data = yield call(createPayment, payload)
    yield put(actions.paymentSuccess(data))
  } catch (error) {
    yield put(actions.paymentFailure(new Error(error.message)))
  }
}

export default function* sagas () {
  yield takeLatest(actions.doPayment, doPayment)
}
