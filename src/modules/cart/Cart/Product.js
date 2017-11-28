import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Button from '../../../components/Button'
import style from './Product.style.css'

const Product = ({
  id,
  image,
  name,
  price,
  seller,
  onRemove,
}) => {
  const smallCellClasses = classnames(style.productCell, style.smallCell)
  const largeCellClasses = classnames(style.productCell, style.largeCell)
  const buttonCellClasses = classnames(
    style.productCell,
    style.largeCell,
    style.buttonCell
  )
  return (
    <tr>
      <td className={smallCellClasses}>
        <img
          src={image}
          alt={name}
          className={style.image}
        />
      </td>
      <td className={largeCellClasses}>{name}</td>
      <td className={smallCellClasses}>R$ {price}</td>
      <td className={buttonCellClasses}>
        <Button
          onClick={() => onRemove(id, seller.id)}
          color="grey"
        >
          Remover do carrinho
        </Button>
      </td>
    </tr>
  )
}

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
