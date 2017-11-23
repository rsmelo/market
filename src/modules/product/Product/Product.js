import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import style from './style.css'

class Product extends PureComponent {
  componentDidMount () {
    const {
      product,
      match: { params: id },
      getProduct,
    } = this.props

    if (!product) {
      getProduct(id)
    }
  }

  render () {
    const { product, addToCart } = this.props
    return (
      <div>
        <div>
          <img
            className={style.image}
            src={product.image}
            alt={product.name}
          />
        </div>
        <div>
          <h2 className={style.name}>{product.name}</h2>
          <span className={style.category}>{product.category}</span>
          <p>{product.description}</p>
          <div>
            <span className={style.price}>R$ {product.price}</span>
            <button onClick={() => addToCart(product.id)}>Comprar</button>
          </div>
          <div>
            vendido por <span>{product.seller.name}</span>
          </div>
        </div>
      </div>
    )
  }
}

Product.defaultProps = {
  product: null,
  getProduct: null,
  addToCart: null,
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    seller: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  getProduct: PropTypes.func,
  addToCart: PropTypes.func,
}
export default Product
