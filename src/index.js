import React from 'react'
import { render } from 'react-dom'

import Root from './components/Root'
import configureStore from './store'
import rootSaga from './sagas'

import './styles/main.css'

const store = configureStore()
store.runSaga(rootSaga)
render(<Root store={store} />, document.getElementById('root'))
