import { createPayment, getPayables } from './api'

jest.mock('pagarme')

describe('checkout api', () => {
  describe('createPayment', () => {
    it('should return a transaction', async () => {
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
      const expected = {
        amount: 1000,
      }
      const data = await createPayment(payload)
      expect(data).toEqual(expected)
    })
  })
  describe('getPayables', () => {
    it('should return a transaction payables', async () => {
      const transactionId = 123
      const expected = [
        { transactionId },
        { transactionId },
      ]
      const data = await getPayables(transactionId)
      expect(data).toEqual(expected)
    })
  })
})
