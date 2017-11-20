import { connect } from 'react-redux'

import ProductList from './ProductList'

import { getProducts } from '../actions'
import { getGalleryProducts } from '../../combinedReducers'

const mapStateToProps = state => ({
  products: getGalleryProducts(state),
})

const mapDispatchToProps = {
  getProducts,
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
