import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'

import CustomerForm from './CustomerForm'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import validate from './validate'
import Button from '../../../components/Button'
import FormNotification from '../../../components/FormNotification'
import Loader from '../../../components/Loader'
import style from './style.css'

const Checkout = ({
  cart,
  error,
  pristine,
  submitting,
  handleSubmit,
  onSubmit,
  history: { push },
}) => (
  <div className={style.container}>
    <form
      onSubmit={handleSubmit(data => onSubmit({ data, cart, push }))}
      className={style.checkout}
    >
      <div className={style.formContainer}>
        <CustomerForm />
        <AddressForm />
        <div>
          <PaymentForm />
          <div className={style.buttonContainer}>
            <Button
              type="submit"
              disabled={pristine || submitting}
            >
            Finalizar compra
            </Button>
          </div>
        </div>
      </div>
      <div>
        {error &&
          <FormNotification type="error">
            {error}
          </FormNotification>
        }
      </div>
      {submitting && <Loader />}
    </form>
  </div>
)

Checkout.defaultProps = {
  error: null,
}

Checkout.propTypes = {
  cart: PropTypes.shape({}).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  error: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export { Checkout }

export default reduxForm({
  form: 'checkout',
  validate,
})(Checkout)

