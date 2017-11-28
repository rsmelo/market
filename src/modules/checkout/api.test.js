import { createPayment } from './api'

jest.mock('react-router-dom', () => ({ Link: 'Link' }))

const mockCreate = () => (new Promise((resolve) => {
  resolve({ id: 1 })
}))

jest.mock('pagarme', () => ({
  client: {
    connect: () => (new Promise((resolve) => {
      resolve({
        transaction: {
          create: mockCreate,
        },
      })
    })),
  },
}))

describe('checkout api', () => {
  describe('createPayment', () => {
    it('should return a transaction', () => {
      const payload = {
        data: {
          cardNumber: '1234',
          cardHolderName: 'holder',
          cardExpirationDate: '01/19',
          cardCvv: '1234',
          name: 'user',
          email: 'user@user.com',
          personCode: '083.118.167-27',
          phone: '(48) 9999-99999',
          state: 'sc',
          city: 'city',
          neighborhood: 'neighborhood',
          street: 'street',
          streetNumber: 'streetNumber',
          zipcode: 'zipcode',
          complementary: 'complementary',
        },
        cart: {
          seller: {
            id: 'idseler',
          },
          products: [{
            price: 10,
          }],
        },
      }
      expect.assertions(1)
      return createPayment(payload).then(data => expect(data).toEqual({
        id: 1,
      }))
    })
  })
})
