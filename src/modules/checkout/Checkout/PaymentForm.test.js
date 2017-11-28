import React from 'react'
import renderer from 'react-test-renderer'

import PaymentForm from './PaymentForm'

jest.mock('redux-form', () => ({ Field: 'Field' }))

describe('PaymentForm', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<PaymentForm />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
