import React from 'react'
import renderer from 'react-test-renderer'

import Order from './Order'

jest.mock('react-router-dom', () => ({ Link: 'Link' }))

describe('Order', () => {
  it('renders correctly', () => {
    const props = {
      order: {},
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
