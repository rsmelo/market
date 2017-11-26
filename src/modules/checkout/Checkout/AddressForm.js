import React from 'react'
import { Field } from 'redux-form'

import InputField from '../../../components/InputField'
import normalizeZipcode from '../../../utils/normalize/normalizeZipcode'


const maskZipcode = '00000-000'

const AddressForm = () => (
  <div>
    <h2>Endereço</h2>
    <label htmlFor="street">Rua</label>
    <Field
      id="street"
      name="street"
      type="input"
      component={InputField}
    />
    <label htmlFor="streetNumber">Número</label>
    <Field
      id="streetNumber"
      name="streetNumber"
      type="input"
      component={InputField}
    />
    <label htmlFor="complementary">Complemento</label>
    <Field
      id="complementary"
      name="complementary"
      type="input"
      component={InputField}
    />
    <label htmlFor="neighborhood">Bairro</label>
    <Field
      id="neighborhood"
      name="neighborhood"
      type="input"
      component={InputField}
    />
    <label htmlFor="city">Cidade</label>
    <Field
      id="city"
      name="city"
      type="input"
      component={InputField}
    />
    <label htmlFor="state">Estado</label>
    <Field
      id="state"
      name="state"
      type="input"
      component={InputField}
    />
    <label htmlFor="zipcode">CEP</label>
    <Field
      id="zipcode"
      name="zipcode"
      type="input"
      normalize={normalizeZipcode}
      placeholder={maskZipcode}
      component={InputField}
    />
  </div>
)

export default AddressForm
