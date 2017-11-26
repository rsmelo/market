import React from 'react'
import { Field } from 'redux-form'

import InputField from '../../../components/InputField'
import normalizeCPF from '../../../utils/normalize/normalizeCPF'
import normalizePhone from '../../../utils/normalize/normalizePhone'

const maskCPF = '000.000.000-00'
const maskPhone = '(00) 0000-0000'


const CustomerForm = () => (
  <div>
    <h2>Dados Pessoais</h2>
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
    <label htmlFor="personCode">CPF</label>
    <Field
      id="personCode"
      name="personCode"
      type="input"
      normalize={normalizeCPF}
      placeholder={maskCPF}
      component={InputField}
    />
    <label htmlFor="phone">Telefone</label>
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
