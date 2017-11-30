import actions from './actions'

describe('Checkout actions', () => {
  it('doPayment should create CHECKOUT/DO_PAYMENT action', () => {
    const expectedAction = {
      type: 'CHECKOUT/DO_PAYMENT',
    }
    expect(actions.doPayment()).toEqual(expectedAction)
  })
})
