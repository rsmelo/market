import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import style from './style.css'

const FieldNotification = ({ message, type }) => (
  <span className={classNames(style.fieldNotification, style[type])}>
    {message}
  </span>
)

FieldNotification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']).isRequired,
}

export default FieldNotification
