import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import router from './router'

const App = ({ store }) => (
  <Provider store={store}>
    {router}
  </Provider>
)

App.propTypes = {
  store: PropTypes.shape().isRequired,
}

export default App
