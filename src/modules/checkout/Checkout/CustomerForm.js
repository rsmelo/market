import React from 'react'
import { Field } from 'redux-form'

import InputField from '../../../components/InputField'
import normalizeCPF from '../../../utils/normalize/normalizeCPF'
import normalizePhone from '../../../utils/normalize/normalizePhone'
import style from './style.css'

const maskCPF = '000.000.000-00'
const maskPhone = '(00) 0000-0000'


const CustomerForm = () => (
  <div className={style.form}>
    <h2 className={style.title}>1. Dados Pessoais</h2>
    <label htmlFor="name" className={style.label}>Nome</label>
    <Field
      id="name"
      name="name"
      type="input"
      component={InputField}
    />
    <label htmlFor="email" className={style.label}>E-mail</label>
    <Field
      id="email"
      name="email"
      type="input"
      component={InputField}
    />
    <label htmlFor="personCode" className={style.label}>CPF</label>
    <Field
      id="personCode"
      name="personCode"
      type="input"
      normalize={normalizeCPF}
      placeholder={maskCPF}
      component={InputField}
    />
    <label htmlFor="phone" className={style.label}>Telefone</label>
    <Field
      id="phone"
      name="phone"
      type="input"
      normalize={normalizePhone}
      placeholder={maskPhone}
      component={InputField}
    />
  </div>
)

export default CustomerForm
