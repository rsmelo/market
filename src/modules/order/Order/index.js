import { connect } from 'react-redux'

import Order from './Order'
import {
  getOrder,
} from '../../combinedReducers'

const mapStateToProps = (state, ownProps) => ({
  order: getOrder(state, ownProps.match.params.id),
})

export default connect(mapStateToProps, {})(Order)
