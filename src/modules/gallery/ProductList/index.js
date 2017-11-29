import { connect } from 'react-redux'

import ProductList from './ProductList'

import { getProducts } from '../actions'
import { getGalleryProducts, getGalleryIsFetching } from '../../combinedReducers'

const mapStateToProps = state => ({
  products: getGalleryProducts(state),
  isFetching: getGalleryIsFetching(state),
})

const mapDispatchToProps = {
  getProducts,
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
