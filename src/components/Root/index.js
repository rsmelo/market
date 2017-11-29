import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import router from '../../router'

const Root = ({ store }) => (
  <div>
    <Provider store={store}>
      <div>
        {router}
      </div>
    </Provider>
  </div>
)

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
}

export default Root
