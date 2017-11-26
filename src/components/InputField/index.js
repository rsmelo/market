import React from 'react'
import PropTypes from 'prop-types'

import FieldNotification from '../FieldNotification/'
import style from './style.css'

const InputField = ({
  input,
  type,
  id,
  placeholder,
  meta: { touched, error },
  ...props
}) => (
  <div className={style.input}>
    <input {...input} type={type} id={id} placeholder={placeholder} {...props} />
    {touched &&
      (error && <FieldNotification type="error" message={error} />)}
  </div>
)

InputField.defaultProps = {
  placeholder: null,
  maxLength: null,
}

InputField.propTypes = {
  input: PropTypes.shape({}).isRequired,
  meta: PropTypes.shape({}).isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
}

export default InputField
