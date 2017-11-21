import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import App from './App'

it('renders without crashing', () => {
  const store = configureStore()
  shallow(<App store={store()} />)
})
