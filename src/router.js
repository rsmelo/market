import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Gallery from './modules/gallery'
import Product from './modules/product'
import Cart from './modules/cart'
import Checkout from './modules/checkout'
import Order from './modules/order'

export default (
  <Switch>
    <Route exact path="/" component={Gallery} />
    <Route exact path="/product/:id" component={Product} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/checkout/:id" component={Checkout} />
    <Route exact path="/order/:id" component={Order} />
  </Switch>
)
