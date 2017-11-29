import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Loader from '../../../components/Loader'
import Product from './Product'
import style from './ProductList.style.css'

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
    const { isFetching } = this.props
    return (
      <div className={style.container}>
        <ul className={style.productList}>
          {this.renderProducts()}
        </ul>
        {isFetching && <Loader />}
      </div>
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
  isFetching: PropTypes.bool.isRequired,
  getProducts: PropTypes.func.isRequired,
}

export default ProductList
