import { fork, all } from 'redux-saga/effects'

import gallerySagas from './modules/gallery/sagas'
import productSagas from './modules/product/sagas'

export default function* rootSaga () {
  yield all([
    fork(gallerySagas),
    fork(productSagas),
  ])
}
