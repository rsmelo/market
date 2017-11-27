import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import ProductList from './ProductList'
import ButtonLink from '../../../components/ButtonLink'
import style from './style.css'

class Cart extends PureComponent {
  constructor (props) {
    super(props)
    this.renderCarts = this.renderCarts.bind(this)
  }

  renderCarts () {
    const { carts, removeProduct } = this.props
    return carts.map(({ seller, products }) => (
      <div key={seller.id} className={style.cartContainer}>
        <span>vendido por {seller.name}</span>
        <ProductList
          products={products}
          removeProduct={removeProduct}
        />
        <ButtonLink to={`/checkout/${seller.id}`}>
          Finalizar pedido
        </ButtonLink>
      </div>
    ))
  }

  render () {
    const { carts } = this.props
    return (
      <div className={style.container}>
        <ButtonLink to="/" appearance="outline">
          Continuar comprando
        </ButtonLink>
        {carts.length ?
          this.renderCarts() :
          (<p>Você não possui nenhum produto no carrinho</p>)
        }
      </div>
    )
  }
}

Cart.propTypes = {
  carts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  removeProduct: PropTypes.func.isRequired,
}

export default Cart
