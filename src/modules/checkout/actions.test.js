import {
  doPayment,
  paymentRequest,
  paymentSuccess,
  paymentFailure,
} from './actions'

describe('Checkout actions', () => {
  it('doPayment should create CHECKOUT/DO_PAYMENT action', () => {
    const expectedAction = {
      type: 'CHECKOUT/DO_PAYMENT',
    }
    expect(doPayment()).toEqual(expectedAction)
  })

  it('paymentRequest should create CHECKOUT/PAYMENT_REQUEST action', () => {
    const expectedAction = {
      type: 'CHECKOUT/PAYMENT_REQUEST',
    }
    expect(paymentRequest()).toEqual(expectedAction)
  })

  it('paymentSuccess should create CHECKOUT/PAYMENT_SUCCESS action', () => {
    const payload = {
      cart: {},
      data: {},
    }
    const expectedAction = {
      type: 'CHECKOUT/PAYMENT_SUCCESS',
      payload,
    }
    expect(paymentSuccess(payload)).toEqual(expectedAction)
  })

  it('paymentFailure should create CHECKOUT/PAYMENT_FAILURE action', () => {
    const error = new Error('a message')
    const expectedAction = {
      type: 'CHECKOUT/PAYMENT_FAILURE',
      payload: error,
      error: true,
    }
    expect(paymentFailure(error)).toEqual(expectedAction)
  })
})
