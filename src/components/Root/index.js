import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import router from '../../router'

const basename = '/'

const Root = ({ store }) => (
  <div>
    <Provider store={store}>
      <BrowserRouter
        basename={basename}
      >
        <div>
          {router}
        </div>
      </BrowserRouter>
    </Provider>
  </div>
)

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
}

export default Root
