import { createStore, compose, applyMiddleware } from 'redux'

import reducersCombined from './modules/combinedReducers'

const enhacers = (window.devToolsExtension ? window.devToolsExtension() : f => f)

export default createStore(
  reducersCombined,
  compose(applyMiddleware(enhacers))
)
