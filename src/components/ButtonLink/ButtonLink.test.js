import React from 'react'
import renderer from 'react-test-renderer'

import ButtonLink from './index'

jest.mock('react-router-dom', () => ({ Link: 'Link' }))

describe('ButtonLink', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<ButtonLink>Test</ButtonLink>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
