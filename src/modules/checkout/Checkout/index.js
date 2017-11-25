import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Checkout from './Checkout'

// const mapStateToProps = state => ({
//   carts: getCartList(state),
// })

// const mapDispatchToProps = {
//   removeProduct,
// }

export default withRouter(connect(null, {})(Checkout))
