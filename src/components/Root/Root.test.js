import React from 'react'
import renderer from 'react-test-renderer'

import Root from './index'

jest.mock('react-redux', () => ({ Provider: 'Provider' }))
jest.mock('../../router', () => 'router')

describe('Root', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Root store={{}} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
