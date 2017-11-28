import actions from './actions'

describe('Order actions', () => {
  it('addOrder should create ORDER/ADD_ORDER action', () => {
    const expectedAction = {
      type: 'ORDER/ADD_ORDER',
    }
    expect(actions.addOrder()).toEqual(expectedAction)
  })
})
