import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'

import CustomerForm from './CustomerForm'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import validate from './validate'
import Button from '../../../components/Button'
import FormNotification from '../../../components/FormNotification'
import ButtonLink from '../../../components/ButtonLink'
import Loader from '../../../components/Loader'
import style from './style.css'

const renderNoCartMessage = () => (
  <div className={style.noCartMessage}>
    <p className={style.message}>
      O carrinho associado a este pedido não foi localizado
    </p>
    <ButtonLink to="/" appearance="outline">
        Ver produtos
    </ButtonLink>
  </div>
)
class Checkout extends PureComponent {
  constructor (props) {
    super(props)
    this.renderForm = this.renderForm.bind(this)
  }

  renderForm () {
    const {
      cart,
      error,
      pristine,
      submitting,
      handleSubmit,
      onSubmit,
      history: { push },
    } = this.props
    return (
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
    )
  }

  render () {
    const { cart } = this.props

    return (
      <div className={style.container}>
        {cart ?
          this.renderForm() :
          renderNoCartMessage()
        }

      </div>
    )
  }
}

Checkout.defaultProps = {
  error: null,
  cart: null,
}

Checkout.propTypes = {
  cart: PropTypes.shape({}),
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

