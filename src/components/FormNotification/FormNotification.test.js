import React from 'react'
import renderer from 'react-test-renderer'

import FormNotification from './index'

describe('FormNotification', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<FormNotification>Test</FormNotification>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
