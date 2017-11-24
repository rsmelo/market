import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Cart from './Cart'

import { getCartList } from '../../combinedReducers'
import { removeProduct } from '../actions'

const mapStateToProps = state => ({
  carts: getCartList(state),
})

const mapDispatchToProps = {
  removeProduct,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart))
