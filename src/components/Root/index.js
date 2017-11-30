import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Header from '../Header'
import router from '../../router'
import style from './style.css'

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div className={style.root}>
        <Header />
        {router}
      </div>
    </BrowserRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
}

export default Root
