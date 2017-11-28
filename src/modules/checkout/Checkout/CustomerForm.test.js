import React from 'react'
import renderer from 'react-test-renderer'

import CustomerForm from './CustomerForm'

jest.mock('redux-form', () => ({ Field: 'Field' }))

describe('AddressForm', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CustomerForm />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
