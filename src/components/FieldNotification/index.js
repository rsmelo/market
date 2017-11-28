import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import style from './style.css'

const FieldNotification = ({ children, type }) => (
  <span className={classNames(style.fieldNotification, style[type])}>
    {children}
  </span>
)

FieldNotification.defaultProps = {
  type: 'error',
}

FieldNotification.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  type: PropTypes.oneOf(['success', 'error']),
}

export default FieldNotification
