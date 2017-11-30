import React from 'react'
import { Field } from 'redux-form'

import InputField from '../../../components/InputField'
import normalizeCreditCard from '../../../utils/normalize/normalizeCreditCard'
import normalizeCardExpirationDate from '../../../utils/normalize/normalizeCardExpirationDate'
import style from './style.css'

const maskCardNumber = '0000 0000 0000 0000'
const maskCardExpirationDate = '00/00'

const PaymentForm = () => (
  <div className={style.form}>
    <h2 className={style.title}>3. Pagamento</h2>
    <label htmlFor="cardNumber" className={style.label}>Número do cartão</label>
    <Field
      id="cardNumber"
      name="cardNumber"
      type="input"
      normalize={normalizeCreditCard}
      component={InputField}
      placeholder={maskCardNumber}
    />
    <label htmlFor="cardHolderName" className={style.label}>Nome do titular</label>
    <Field
      id="cardHolderName"
      name="cardHolderName"
      type="input"
      component={InputField}
    />
    <label htmlFor="cardExpirationDate" className={style.label}>Expira em</label>
    <Field
      id="cardExpirationDate"
      name="cardExpirationDate"
      type="input"
      normalize={normalizeCardExpirationDate}
      component={InputField}
      placeholder={maskCardExpirationDate}
    />
    <label htmlFor="cardCvv" className={style.label}>Código de segurança</label>
    <Field
      id="cardCvv"
      name="cardCvv"
      type="input"
      maxLength={4}
      component={InputField}
    />
  </div>
)

export default PaymentForm
