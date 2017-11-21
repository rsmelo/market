import { fork, all } from 'redux-saga/effects'

import gallerySagas from './modules/gallery/sagas'

export default function* rootSaga () {
  yield all([
    fork(gallerySagas),
  ])
}
