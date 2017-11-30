import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CheckoutForm from './Checkout'
import { getCartBySeller } from '../../combinedReducers'
import actions from '../actions'

const mapStateToProps = (state, ownProps) => ({
  cart: getCartBySeller(state, ownProps.match.params.id),
})

const mapDispatchToProps = {
  onSubmit: actions.doPayment,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckoutForm))
