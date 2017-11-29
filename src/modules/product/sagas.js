import { takeLatest, put, call } from 'redux-saga/effects'

import * as actions from './actions'
import fetchProduct from './api'

export function* getProduct ({ payload }) {
  try {
    yield put(actions.productRequest())
    const { data } = yield call(fetchProduct, payload)
    yield put(actions.productSuccess(data))
  } catch (error) {
    yield put(actions.productFailure(error.message))
  }
}

export default function* sagas () {
  yield takeLatest(actions.getProduct, getProduct)
}
