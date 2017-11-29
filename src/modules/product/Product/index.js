import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Product from './Product'

import {
  getGalleryProductById,
  getGalleryIsFetching,
  getExistProductInCart,
} from '../../combinedReducers'
import { getProduct } from '../actions'
import { addProduct, removeProduct } from '../../cart/actions'

const mapStateToProps = (state, ownProps) => {
  const product = getGalleryProductById(state, ownProps.match.params.id)
  return {
    product,
    isFetching: getGalleryIsFetching(state),
    addedToCart: product ?
      getExistProductInCart(state, product.id, product.seller.id) :
      false,
  }
}

const mapDispatchToProps = {
  getProduct,
  addProduct,
  removeProduct,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product))
