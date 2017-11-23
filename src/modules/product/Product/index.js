import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Product from './Product'

import { getGalleryProductById } from '../../combinedReducers'

const mapStateToProps = (state, ownProps) => ({
  product: getGalleryProductById(state, ownProps.match.params.id),
})

// const mapDispatchToProps = {
//   getProducts,
// }


export default withRouter(connect(mapStateToProps, {})(Product))
