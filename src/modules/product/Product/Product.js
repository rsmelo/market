import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import style from './style.css'

class Product extends PureComponent {
  constructor (props) {
    super(props)
    this.renderButtons = this.renderButtons.bind(this)
  }

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

  renderButtons () {
    const {
      product,
      addedToCart,
      removeProduct,
      addProduct,
    } = this.props

    if (addedToCart) {
      return (
        <button onClick={() => removeProduct(product.id, product.seller.id)}>
          Remover do carrinho
        </button>
      )
    }
    return (<button onClick={() => addProduct(product)}>Adicionar ao carrinho</button>)
  }

  render () {
    const { product } = this.props
    return (product && (
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
            {this.renderButtons()}
          </div>
          <div>
            vendido por <span>{product.seller.name}</span>
          </div>
        </div>
      </div>
    ))
  }
}

Product.defaultProps = {
  product: null,
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
  addedToCart: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  getProduct: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
}
export default Product
