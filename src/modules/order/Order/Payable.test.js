import React from 'react'
import renderer from 'react-test-renderer'

import Payable from './Payable'

jest.mock('react-router-dom', () => ({ Link: 'Link' }))

describe('Order', () => {
  it('renders correctly', () => {
    const props = {
      status: 'waiting_funds',
      amount: 24000,
      fee: 6000,
      recipientId: 're_cj2wd5u2600fecw6eytgcbkd0',
      paymentDate: '2017-08-01T03:00:00.000',
      dateCreated: '2017-06-29T18:16:49.411Z',
    }
    const tree = renderer
      .create(<Payable {...props} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
