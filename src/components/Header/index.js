import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.css'

const Header = () => (
  <div className={style.header}>
    <div className={style.content}>
      <h1>
        <Link to="/" className={style.titleLink}>
          Market
        </Link>
      </h1>
      <Link to="/cart">
        <div className={style.cartIcon} />
      </Link>
    </div>
  </div>
)

export default Header
