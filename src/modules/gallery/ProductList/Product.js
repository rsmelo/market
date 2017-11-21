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
  <li>
    <div>
      <Link to={`/product/${id}`}>
        <img
          className={style.image}
          src={image}
          alt={name}
        />
      </Link>
    </div>
    <div>
      <h2 className={style.name}>{name}</h2>
      <span className={style.price}>R$ {price}</span>
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
