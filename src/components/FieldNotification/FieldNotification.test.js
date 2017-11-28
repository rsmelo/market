import React from 'react'
import renderer from 'react-test-renderer'

import FieldNotification from './index'

describe('FieldNotification', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<FieldNotification>Test</FieldNotification>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
