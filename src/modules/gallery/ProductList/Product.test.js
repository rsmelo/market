import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'

import Product from './Product'


describe('Product', () => {
  let props

  beforeEach(() => {
    props = {
      id: 'a12090',
      name: 'a product',
      price: 10,
      image: 'image-url',
    }
  })

  it('should have a h2 with the product.name', () => {
    const component = shallow(<Product {...props} />)
    const nameElement = component.find('h2')
    expect(nameElement.text()).toBe(props.name)
  })

  it('should have a span with the product.price', () => {
    const component = shallow(<Product {...props} />)
    const priceElement = component.find('span')
    expect(priceElement.text()).toBe(`R$ ${props.price}`)
  })

  it('should have a Link to the product page', () => {
    const component = shallow(<Product {...props} />)
    const link = component.find(Link)
    expect(link.prop('to')).toBe(`/product/${props.id}`)
  })

  it('should have a img with src equals product.image', () => {
    const component = shallow(<Product {...props} />)
    const imgElement = component.find('img')
    expect(imgElement.prop('src')).toBe(props.image)
  })
})
