import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import style from '../Button/style.css'

const Button = ({
  to,
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
    <Link
      to={to}
      className={styles}
    >
      {children}
    </Link>
  )
}


Button.defaultProps = {
  to: null,
  appearance: 'flat',
  color: 'green',
}

Button.propTypes = {
  to: PropTypes.string,
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
