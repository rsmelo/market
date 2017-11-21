import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'


import reducersCombined from './modules/combinedReducers'

const enhacers = (window.devToolsExtension ? window.devToolsExtension() : f => f)

export default function configureStore () {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducersCombined,
    compose(
      applyMiddleware(sagaMiddleware),
      enhacers
    )
  )

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}
