import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../../components/Button'
import style from './Product.style.css'

const Product = ({
  id,
  image,
  name,
  price,
  seller,
  onRemove,
}) => (
  <tr>
    <td>
      <img
        src={image}
        alt={name}
        className={style.image}
      />
    </td>
    <td className={style.productCell}>{name}</td>
    <td className={style.productCell}>R$ {price}</td>
    <td className={style.productCell}>
      <Button onClick={() => onRemove(id, seller.id)}>
        Remover do carrinho
      </Button>
    </td>
  </tr>
)

Product.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  seller: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
}
export default Product
