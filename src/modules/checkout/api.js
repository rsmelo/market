import pagarme from 'pagarme'

import calculateTotal from '../../utils/calculateTotal'
import onlyNumber from '../../utils/onlyNumber'

const createItems = products => products.map(({
  id,
  name,
  price,
  category,
}) => ({
  quantity: 1,
  tangible: true,
  title: name,
  unit_price: price,
  id,
  category,
}))

const createCustomer = ({
  name,
  email,
  personCode,
  phone,
}) => ({
  external_id: '123456',
  type: 'individual',
  country: 'br',
  name,
  email,
  documents: [
    {
      type: 'cpf',
      number: onlyNumber(personCode),
    },
  ],
  phone_numbers: [`+55${onlyNumber(phone)}`],
})

const createBilling = ({
  name,
  state,
  city,
  neighborhood,
  street,
  streetNumber,
  zipcode,
  complementary,
}) => ({
  address: {
    country: 'br',
    street_number: streetNumber,
    state,
    city,
    neighborhood,
    street,
    zipcode: onlyNumber(zipcode),
    complementary,
  },
  name,
})

const createSplitRules = sellerId => ([
  {
    recipient_id: sellerId,
    charge_processing_fee: true,
    liable: true,
    percentage: 60,
  },
  {
    recipient_id: 're_cja5ack8i02fkzr6e6l0d3qll',
    charge_processing_fee: true,
    liable: true,
    percentage: 25,
  },
  {
    recipient_id: 're_cjabsmtlm01ovla6fks4wju90',
    charge_processing_fee: true,
    liable: true,
    percentage: 15,
  },
])

const createData = ({ cart, data }) => {
  const {
    cardNumber,
    cardHolderName,
    cardExpirationDate,
    cardCvv,
  } = data
  return {
    amount: calculateTotal(cart.products) * 100,
    card_number: onlyNumber(cardNumber),
    card_holder_name: cardHolderName,
    card_expiration_date: onlyNumber(cardExpirationDate),
    card_cvv: cardCvv,
    customer: createCustomer(data),
    billing: createBilling(data),
    items: createItems(cart.products),
    split_rules: createSplitRules(cart.seller.id),
  }
}

const createPayment = (payload) => {
  const data = createData(payload)
  return pagarme.client.connect({ api_key: process.env.REACT_APP_API_KEY })
    .then(client => client.transactions.create(data))
}

export default createPayment
