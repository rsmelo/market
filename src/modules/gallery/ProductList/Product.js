import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import style from './Product.style.css'

const Product = ({
  id,
  name,
  price,
  image,
}) => (
  <li className={style.product}>
    <Link to={`/product/${id}`}>
      <img
        className={style.image}
        src={image}
        alt={name}
      />
    </Link>
    <div className={style.information}>
      <Link to={`/product/${id}`}>
        <h2 className={style.name}>{name}</h2>
        <span className={style.price}>R$ {price}</span>
      </Link>
    </div>
  </li>
)

Product.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
}

export default Product
