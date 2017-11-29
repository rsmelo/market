import React from 'react'

import style from './style.css'

const Loader = () => (
  <div className={style.overlay}>
    <span className={style.loader}>Loading...</span>
  </div>
)

export default Loader
