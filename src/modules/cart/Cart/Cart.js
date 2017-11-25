import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import ProductList from './ProductList'

class Cart extends PureComponent {
  constructor (props) {
    super(props)
    this.renderCarts = this.renderCarts.bind(this)
  }

  renderCarts () {
    const { carts, removeProduct } = this.props
    return carts.map(({ seller, products }) => (
      <div>
        <span>vendido por {seller.name}</span>
        <ProductList
          products={products}
          removeProduct={removeProduct}
        />
        <button>
          Finalizar pedido
        </button>
      </div>
    ))
  }

  render () {
    const { carts } = this.props
    return (
      <div>
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
