import React from 'react'
import renderer from 'react-test-renderer'

import AddressForm from './AddressForm'

jest.mock('redux-form', () => ({ Field: 'Field' }))

describe('AddressForm', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<AddressForm />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
