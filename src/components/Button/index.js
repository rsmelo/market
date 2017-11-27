import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import style from './style.css'

const Button = ({
  onClick,
  type,
  children,
  color,
  appearance,
}) => {
  const styles = classNames(
    style.button,
    style[appearance],
    style[`${appearance}-${color}`]
  )

  return (
    <button
      className={styles}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}


Button.defaultProps = {
  onClick: null,
  appearance: 'flat',
  color: 'green',
  type: 'button',
}

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  onClick: PropTypes.func,
  appearance: PropTypes.oneOf([
    'flat', 'outline',
  ]),
  color: PropTypes.oneOf([
    'green', 'grey',
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
}

export default Button
