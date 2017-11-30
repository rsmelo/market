import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import style from './style.css'

const FormNotification = ({ children, type }) => (
  <div className={classNames(style.formNotification, style[type])}>
    {children}
  </div>
)


FormNotification.defaultProps = {
  type: 'error',
}

FormNotification.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  type: PropTypes.oneOf(['success', 'error']),
}


export default FormNotification
