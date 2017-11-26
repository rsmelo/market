import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Checkout from './Checkout'
import { getCartBySeller } from '../../combinedReducers'
import { doPayment } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  cart: getCartBySeller(state, ownProps.match.params.id),
})

const mapDispatchToProps = {
  onSubmit: doPayment,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Checkout))
