import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'

import CustomerForm from './CustomerForm'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import validate from './validate'
import style from './style.css'

const Checkout = ({
  cart,
  error,
  pristine,
  submitting,
  handleSubmit,
  onSubmit,
}) => (
  <div>
    <form
      onSubmit={handleSubmit(data => onSubmit({ data, cart }))}
      className={style.checkout}
    >
      <CustomerForm />
      <AddressForm />
      <PaymentForm />
      <div>
        <button
          type="submit"
          disabled={pristine || submitting}
        >
          Finalizar compra
        </button>
      </div>
      {error}
    </form>
  </div>
)

Checkout.defaultProps = {
  error: undefined,
}

Checkout.propTypes = {
  cart: PropTypes.shape({}).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  error: PropTypes.string,
}

export default reduxForm({
  form: 'checkout',
  validate,
})(Checkout)

