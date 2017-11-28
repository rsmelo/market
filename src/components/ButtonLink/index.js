import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import style from './style.css'
import styleButton from '../Button/style.css'

const ButtonLink = ({
  to,
  children,
  color,
  appearance,
}) => {
  const styles = classNames(
    style.buttonLink,
    styleButton[appearance],
    styleButton[`${appearance}-${color}`]
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


ButtonLink.defaultProps = {
  to: null,
  appearance: 'flat',
  color: 'green',
}

ButtonLink.propTypes = {
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

export default ButtonLink
