import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Gallery from './modules/gallery'
import Product from './modules/product'
import Cart from './modules/cart'

const basename = '/'

export default (
  <BrowserRouter basename={basename} >
    <Switch>
      <Route exact path="/" component={Gallery} />
      <Route exact path="/product/:id" component={Product} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  </BrowserRouter>
)
