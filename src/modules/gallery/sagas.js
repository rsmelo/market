import { takeLatest, put, call } from 'redux-saga/effects'

import * as actions from './actions'
import fetchProducts from './api'

export function* getProducts () {
  try {
    yield put(actions.productsRequest())
    const { data } = yield call(fetchProducts)
    yield put(actions.productsSuccess(data))
  } catch (error) {
    yield put(actions.productsFailure(new Error(error.message)))
  }
}

export default function* sagas () {
  yield takeLatest(actions.getProducts, getProducts)
}
