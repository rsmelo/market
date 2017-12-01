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
  disabled,
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
      disabled={disabled}
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
  disabled: false,
}

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
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
