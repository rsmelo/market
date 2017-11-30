import React from 'react'
import renderer from 'react-test-renderer'

import Header from './index'

jest.mock('react-router-dom', () => ({ Link: 'Link' }))

describe('Header', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Header />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
