import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Product from './Product'

import { getGalleryProductById } from '../../combinedReducers'
import { getProduct } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  product: getGalleryProductById(state, ownProps.match.params.id),
})

const mapDispatchToProps = {
  getProduct,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product))
