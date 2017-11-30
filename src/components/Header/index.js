import React from 'react'

import ButtonLink from '../../components/ButtonLink'
import style from './style.css'

const Header = () => (
  <div className={style.header}>
    <ButtonLink to="/cart">Carrinho</ButtonLink>
  </div>
)

export default Header
