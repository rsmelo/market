import React from 'react'
import PropTypes from 'prop-types'

import Product from './Product'
import style from './ProductList.style.css'
import calculateTotal from '../../../utils/calculateTotal'


const ProductList = ({ products, removeProduct }) => (
  <table className={style.productList}>
    <thead className={style.header}>
      <tr>
        <th colSpan="2">Produto(s)</th>
        <th >Preço</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {products.map(product => (
        <Product
          key={product.id}
          {...product}
          onRemove={removeProduct}
        />
      ))
      }
    </tbody>
    <tfoot className={style.footer}>
      <tr>
        <td colSpan="2" />
        <td />
        <td className={style.totalLabel}>
          <span>Total</span> R$ {calculateTotal(products)}
        </td>
      </tr>
    </tfoot>
  </table>
)

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  removeProduct: PropTypes.func.isRequired,
}

export default ProductList
