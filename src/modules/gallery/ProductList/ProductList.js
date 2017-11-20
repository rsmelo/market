import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ProductList extends PureComponent {
  componentDidMount () {
    if (!this.props.products) {
      this.props.getProducts()
    }
  }

  render () {
    return (
      <ul>
        <li>
          <div>
            imagem
          </div>
          <div>
            descrição - preço
          </div>
        </li>
        <li>
          <div>
            imagem
          </div>
          <div>
            descrição - preço
          </div>
        </li>
        <li>
          <div>
            imagem
          </div>
          <div>
            descrição - preço
          </div>
        </li>
        <li>
          <div>
            imagem
          </div>
          <div>
            descrição - preço
          </div>
        </li>
      </ul>
    )
  }
}

ProductList.defaultProps = {
  products: null,
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })),
  getProducts: PropTypes.func.isRequired,
}

export default ProductList
