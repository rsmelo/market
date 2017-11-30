import React from 'react'
import { Field } from 'redux-form'

import InputField from '../../../components/InputField'
import normalizeZipcode from '../../../utils/normalize/normalizeZipcode'
import style from './style.css'

const maskZipcode = '00000-000'

const AddressForm = () => (
  <div className={style.form}>
    <h2 className={style.title}>2. Endereço</h2>
    <label htmlFor="street" className={style.label}>Rua</label>
    <Field
      id="street"
      name="street"
      type="input"
      component={InputField}
    />
    <label htmlFor="streetNumber" className={style.label}>Número</label>
    <Field
      id="streetNumber"
      name="streetNumber"
      type="input"
      component={InputField}
    />
    <label htmlFor="complementary" className={style.label}>Complemento</label>
    <Field
      id="complementary"
      name="complementary"
      type="input"
      component={InputField}
    />
    <label htmlFor="neighborhood" className={style.label}>Bairro</label>
    <Field
      id="neighborhood"
      name="neighborhood"
      type="input"
      component={InputField}
    />
    <label htmlFor="city" className={style.label}>Cidade</label>
    <Field
      id="city"
      name="city"
      type="input"
      component={InputField}
    />
    <label htmlFor="state" className={style.label}>Estado</label>
    <Field
      id="state"
      name="state"
      type="input"
      component={InputField}
    />
    <label htmlFor="zipcode" className={style.label}>CEP</label>
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
