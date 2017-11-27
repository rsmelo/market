import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Button from '../../../components/Button'
import ButtonLink from '../../../components/ButtonLink'
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
        <Button
          color="grey"
          appearance="outline"
          onClick={() => removeProduct(product.id, product.seller.id)}
        >
          Remover do carrinho
        </Button>
      )
    }
    return (
      <Button
        onClick={() => addProduct(product)}
      >
        Adicionar ao carrinho
      </Button>)
  }

  render () {
    const { product } = this.props
    return (product && (
      <div className={style.product}>
        <div>
          <ButtonLink to="/" appearance="outline">
            Ver outros produtos
          </ButtonLink>
        </div>
        <div className={style.imageContainer}>
          <img
            className={style.image}
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className={style.info}>
          <h2 className={style.name}>{product.name}</h2>
          <span className={style.category}>{product.category}</span>
          <p className={style.description}>{product.description}</p>
          <div className={style.priceContainer}>
            <span className={style.price}>R$ {product.price}</span>
            <div className={style.buttonContainer}>
              {this.renderButtons()}
              <ButtonLink to="/cart" appearance="outline">
                ir para o carrinho
              </ButtonLink>
            </div>
          </div>
          <div className={style.sellerContainer}>
            vendido por <span className={style.seller}>{product.seller.name}</span>
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
