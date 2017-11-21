import React from 'react'
import { render } from 'react-dom'

import App from './App'
import configureStore from './store'
import rootSaga from './sagas'

import './styles/main.css'
// import registerServiceWorker from './registerServiceWorker'

const store = configureStore()

store.runSaga(rootSaga)
render(<App store={store} />, document.getElementById('root'))
// registerServiceWorker()
