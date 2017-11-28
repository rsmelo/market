import isCpfValid from '../../../utils/validate/isCpfValid'
import onlyNumbers from '../../../utils/onlyNumber'

const validate = (values) => {
  const errors = {}
  const {
    name,
    email,
    phone,
    personCode,
    street,
    streetNumber,
    city,
    state,
    zipcode,
    cardNumber,
    cardHolderName,
    cardExpirationDate,
    cardCvv,
  } = values

  if (!name) {
    errors.name = 'Nome é obrigatório'
  }

  if (!email) {
    errors.email = 'E-mail é obrigatório'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'E-mail inválido'
  }

  if (!phone) {
    errors.phone = 'Telefone é obrigatório'
  }

  if (!personCode) {
    errors.personCode = 'CPF é obrigatório'
  } else if (!isCpfValid(personCode)) {
    errors.personCode = 'CPF inválido'
  }

  if (!street) {
    errors.street = 'Rua é obrigatório'
  }

  if (!streetNumber) {
    errors.streetNumber = 'Número é obrigatório'
  }

  if (!city) {
    errors.city = 'Cidade é obrigatória'
  }

  if (!state) {
    errors.state = 'Estado é obrigatório'
  }

  if (!zipcode) {
    errors.zipcode = 'CEP é obrigatório'
  } else if (!/^\d{5}-\d{3}$/.test(zipcode)) {
    errors.zipcode = 'CEP inválido'
  }

  if (!cardNumber) {
    errors.cardNumber = 'Número do cartão é obrigatório'
  } else if (!/^\d{13,19}$/.test(onlyNumbers(cardNumber))) {
    errors.cardNumber = 'Número do cartão inválido'
  }

  if (!cardHolderName) {
    errors.cardHolderName = 'Nome do titular é obrigatório'
  }

  if (!cardExpirationDate) {
    errors.cardExpirationDate = 'Data de expiração é obrigatória'
  } else if (!/^\d{2}\/\d{2}$/.test(cardExpirationDate)) {
    errors.cardExpirationDate = 'Data de expiração inválida'
  }

  if (!cardCvv) {
    errors.cardCvv = 'Código de segurança é obrigatório'
  } else if (!/^\d{3,4}$/.test(cardCvv)) {
    errors.cardCvv = 'Código de segurança inválido'
  }

  return errors
}

export default validate
