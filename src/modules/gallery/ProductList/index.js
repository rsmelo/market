import { connect } from 'react-redux'

import ProductList from './ProductList'

// const mapStateToProps = {}

const mapDispatchToProps = {
  getProducts: () => {
    console.log('getProducts')
  },
}


export default connect(null, mapDispatchToProps)(ProductList)
