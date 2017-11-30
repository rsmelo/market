import { takeLatest, put, call } from 'redux-saga/effects'

import * as actions from './actions'
import fetchProducts from './api'

export function* getProducts () {
  try {
    const { data } = yield call(fetchProducts)
    yield put(actions.productsSuccess(data))
  } catch (error) {
    yield put(actions.productsFailure(error.message))
  }
}

export default function* sagas () {
  yield takeLatest(actions.getProducts, getProducts)
}
