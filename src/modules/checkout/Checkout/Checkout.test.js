import React from 'react'
import renderer from 'react-test-renderer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'

import CheckoutWithForm, { Checkout } from './Checkout'
import Button from '../../../components/Button'
import FormNotification from '../../../components/FormNotification'

describe('Checkout', () => {
  let store
  beforeEach(() => {
    store = createStore(() => ({}))
  })
  it('renders correctly', () => {
    const props = {
      cart: {},
      handleSubmit: jest.fn(),
      onSubmit: jest.fn(),
      submitting: false,
      pristine: false,
      history: {
        push: jest.fn(),
      },
    }
    const tree = renderer
      .create(<Provider store={store}><CheckoutWithForm {...props} /></Provider>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should call onSubmit when click button submit', () => {
    const cart = {}
    const push = jest.fn()

    const onSubmit = jest.fn()
    const handleSubmit = data => onSubmit({ data, cart, push })
    const props = {
      cart: {},
      handleSubmit,
      onSubmit,
      submitting: false,
      pristine: false,
      history: {
        push,
      },
    }
    const component = mount(<Provider store={store}><CheckoutWithForm {...props} /></Provider>)
    const button = component.find(Button)
    button.simulate('click')
    expect(onSubmit).toHaveBeenCalled()
  })
  it('should show FormNotification if error is passed', () => {
    jest.mock('redux-form', () => ({ Field: 'Field' }))
    const props = {
      cart: {},
      handleSubmit: jest.fn(),
      onSubmit: jest.fn(),
      submitting: false,
      pristine: false,
      history: {
        push: jest.fn(),
      },
      error: 'teste',
    }
    const component = shallow(<Checkout {...props} />)
    const notification = component.find(FormNotification)
    expect(notification).toHaveLength(1)
  })
  it('should not show FormNotification if error is not passed', () => {
    jest.mock('redux-form', () => ({ Field: 'Field' }))
    const props = {
      cart: {},
      handleSubmit: jest.fn(),
      onSubmit: jest.fn(),
      submitting: false,
      pristine: false,
      history: {
        push: jest.fn(),
      },
    }
    const component = shallow(<Checkout {...props} />)
    const notification = component.find(FormNotification)
    expect(notification).toHaveLength(0)
  })
  it('should call handleSubmit when form submit', () => {
    jest.mock('redux-form', () => ({ Field: 'Field' }))
    const push = jest.fn()
    const onSubmit = jest.fn()
    const handleSubmit = jest.fn()
    const props = {
      cart: {},
      handleSubmit,
      onSubmit,
      submitting: false,
      pristine: false,
      history: {
        push,
      },
    }
    const component = shallow(<Checkout {...props} />)
    const form = component.find('form')
    form.simulate('submit')
    expect(handleSubmit).toHaveBeenCalled()
  })
  it('should show the message "O carrinho associado a este pedido não foi localizado" when cart is no set', () => {
    jest.mock('redux-form', () => ({ Field: 'Field' }))
    const push = jest.fn()
    const onSubmit = jest.fn()
    const handleSubmit = jest.fn()
    const props = {
      cart: null,
      handleSubmit,
      onSubmit,
      submitting: false,
      pristine: false,
      history: {
        push,
      },
    }
    const component = shallow(<Checkout {...props} />)
    const paragraph = component.find('p')
    expect(paragraph.text()).toBe('O carrinho associado a este pedido não foi localizado')
  })
})
