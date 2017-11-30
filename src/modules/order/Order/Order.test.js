import React from 'react'
import renderer from 'react-test-renderer'

import Order from './Order'

jest.mock('react-router-dom', () => ({ Link: 'Link' }))

describe('Order', () => {
  it('renders correctly', () => {
    const props = {
      order: {
        amount: 100,
        id: 123,
        status: 'paid',
        payables: [{
          id: '123',
          status: 'waiting_funds',
          amount: 24000,
          fee: 6000,
          recipientId: 're_cj2wd5u2600fecw6eytgcbkd0',
          paymentDate: '2017-08-01T03:00:00.000',
          dateCreated: '2017-06-29T18:16:49.411Z',
        }],
      },
      match: {
        params: {
          id: '123',
        },
      },
    }
    const tree = renderer
      .create(<Order {...props}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
