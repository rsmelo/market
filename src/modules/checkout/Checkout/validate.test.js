import validate from './validate'

describe('checkout validate', () => {
  it('should return name with value "Nome é obrigatório" when values.name does not exist', () => {
    const expected = {
      name: 'Nome é obrigatório',
    }
    expect(validate({})).toMatchObject(expected)
  })
  it('should return email with value "E-mail é obrigatório" when values.email does not exist', () => {
    const expected = {
      email: 'E-mail é obrigatório',
    }
    expect(validate({})).toMatchObject(expected)
  })
  it('should return phone with value "Telefone é obrigatório" when values.phone does not exist', () => {
    const expected = {
      phone: 'Telefone é obrigatório',
    }
    expect(validate({})).toMatchObject(expected)
  })
  it('should return personCode with value "CPF é obrigatório" when values.personCode does not exist', () => {
    const expected = {
      personCode: 'CPF é obrigatório',
    }
    expect(validate({})).toMatchObject(expected)
  })
  it('should return street with value "Rua é obrigatório" when values.street does not exist', () => {
    const expected = {
      street: 'Rua é obrigatório',
    }
    expect(validate({})).toMatchObject(expected)
  })
  it('should return streetNumber with value "Número é obrigatório" when values.streetNumber does not exist', () => {
    const expected = {
      streetNumber: 'Número é obrigatório',
    }
    expect(validate({})).toMatchObject(expected)
  })
  it('should return city with value "Cidade é obrigatória" when values.city does not exist', () => {
    const expected = {
      city: 'Cidade é obrigatória',
    }
    expect(validate({})).toMatchObject(expected)
  })
  it('should return state with value "Estado é obrigatório" when values.state does not exist', () => {
    const expected = {
      state: 'Estado é obrigatório',
    }
    expect(validate({})).toMatchObject(expected)
  })
  it('should return zipcode with value "CEP é obrigatório" when values.zipcode does not exist', () => {
    const expected = {
      zipcode: 'CEP é obrigatório',
    }
    expect(validate({})).toMatchObject(expected)
  })
  it('should return cardNumber with value "Número do cartão é obrigatório" when values.cardNumber does not exist', () => {
    const expected = {
      cardNumber: 'Número do cartão é obrigatório',
    }
    expect(validate({})).toMatchObject(expected)
  })
  it('should return cardHolderName with value "Nome do titular é obrigatório" when values.cardHolderName does not exist', () => {
    const expected = {
      cardHolderName: 'Nome do titular é obrigatório',
    }
    expect(validate({})).toMatchObject(expected)
  })
  it('should return cardExpirationDate with value "Data de expiração é obrigatória" when values.cardExpirationDate does not exist', () => {
    const expected = {
      cardExpirationDate: 'Data de expiração é obrigatória',
    }
    expect(validate({})).toMatchObject(expected)
  })
  it('should return cardCvv with value "Código de segurança é obrigatório" when values.cardCvv does not exist', () => {
    const expected = {
      cardCvv: 'Código de segurança é obrigatório',
    }
    expect(validate({})).toMatchObject(expected)
  })
  it('should return email with value "E-mail inválido" when values.email is invalid', () => {
    const expected = {
      email: 'E-mail inválido',
    }
    expect(validate({ email: 'rodrigo.com.br' })).toMatchObject(expected)
  })
  it('should return personCode with value "CPF inválido" when values.personCode is invalid', () => {
    const expected = {
      personCode: 'CPF inválido',
    }
    expect(validate({ personCode: '06027422968' })).toMatchObject(expected)
  })
  it('should return zipcode with value "CEP inválido" when values.zipcode is invalid', () => {
    const expected = {
      zipcode: 'CEP inválido',
    }
    expect(validate({ zipcode: '88050-0022' })).toMatchObject(expected)
  })
  it('should return cardNumber with value "Número do cartão inválido" when values.cardNumber is invalid', () => {
    const expected = {
      cardNumber: 'Número do cartão inválido',
    }
    expect(validate({ cardNumber: '12345678' })).toMatchObject(expected)
  })
  it('should return cardExpirationDate with value "Data de expiração inválida" when values.cardExpirationDate is invalid', () => {
    const expected = {
      cardExpirationDate: 'Data de expiração inválida',
    }
    expect(validate({ cardExpirationDate: '12345' })).toMatchObject(expected)
  })
  it('should return cardCvv with value "Código de segurança inválido" when values.cardCvv is invalid', () => {
    const expected = {
      cardCvv: 'Código de segurança inválido',
    }
    expect(validate({ cardCvv: '12345' })).toMatchObject(expected)
  })
})
