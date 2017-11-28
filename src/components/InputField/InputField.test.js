import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import InputField from './index'
import FieldNotification from '../FieldNotification'

describe('InputField', () => {
  it('should render correctly', () => {
    const props = {
      input: {},
      type: 'text',
      id: 'name',
      meta: {
        touched: true,
        error: 'teste',
      },
    }
    const tree = renderer
      .create(<InputField {...props} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should show error if touched and has error', () => {
    const props = {
      input: {},
      type: 'text',
      id: 'name',
      meta: {
        touched: true,
        error: 'teste',
      },
    }
    const component = shallow(<InputField {...props} />)
    const notification = component.find(FieldNotification)
    expect(notification).toHaveLength(1)
  })
  it('should not show error if was nottouched and has error', () => {
    const props = {
      input: {},
      type: 'text',
      id: 'name',
      meta: {
        touched: false,
        error: 'teste',
      },
    }
    const component = shallow(<InputField {...props} />)
    const notification = component.find(FieldNotification)
    expect(notification).toHaveLength(0)
  })
})
