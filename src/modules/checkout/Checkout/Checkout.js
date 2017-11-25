import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'

import InputField from '../../../components/InputField'

const Checkout = ({
  error,
  pristine,
  submitting,
  handleSubmit,
}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome</label>
      <Field
        id="name"
        name="name"
        type="input"
        component={InputField}
      />
      <label htmlFor="email">E-mail</label>
      <Field
        id="email"
        name="email"
        type="input"
        component={InputField}
      />
      <label htmlFor="phone">Telefone</label>
      <Field
        id="phone"
        name="phone"
        type="input"
        component={InputField}
      />
      <label htmlFor="personId">CPF</label>
      <Field
        id="personId"
        name="personId"
        type="input"
        component={InputField}
      />
      <button
        type="submit"
        disabled={pristine || submitting}
      >
        Finalizar compra
      </button>
      {error}
    </form>
  </div>
)

Checkout.defaultProps = {
  error: undefined,
}

Checkout.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  error: PropTypes.string,
}

export default reduxForm({
  form: 'checkout',
})(Checkout)

