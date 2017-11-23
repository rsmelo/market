import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Product from './Product'

class ProductList extends PureComponent {
  constructor (props) {
    super(props)
    this.renderProducts = this.renderProducts.bind(this)
  }

  componentDidMount () {
    this.props.getProducts()
  }

  renderProducts () {
    const { products } = this.props
    return (products && products.map(product => (
      <Product {...product} key={product.id} />
    )))
  }

  render () {
    return (
      <ul>
        {this.renderProducts()}
      </ul>
    )
  }
}

ProductList.defaultProps = {
  products: null,
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })),
  getProducts: PropTypes.func.isRequired,
}

export default ProductList
