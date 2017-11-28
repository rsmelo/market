import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Button from './index'

describe('Button', () => {
  it('should render correctly', () => {
    const onClick = jest.fn()
    const tree = renderer
      .create(<Button onClick={onClick} >Test</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should be clicked', () => {
    const onClick = jest.fn()
    const component = shallow(<Button onClick={onClick} >Test</Button>)
    component.simulate('click')
    expect(onClick).toHaveBeenCalled()
  })
})
