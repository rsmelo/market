import { createStore, compose } from 'redux'

import reducersCombined from './modules/combinedReducers'

const enhacers = (window.devToolsExtension ? window.devToolsExtension() : f => f)

export default createStore(
  reducersCombined,
  compose(enhacers)
)
