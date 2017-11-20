import React from 'react'

import ProductList from '../ProductList'
import style from './style.css'

const Gallery = () => (
  <div className={style.gallery}>
    <div className={style.content}>
      <ProductList />
    </div>
  </div>
)

export default Gallery
