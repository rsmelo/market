import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Gallery from './modules/gallery'

const basename = '/'

export default (
  <BrowserRouter basename={basename} >
    <Switch>
      <Route exact path="/" component={Gallery} />
      <Route exact path="/product/:id" component={() => (<h1>product</h1>)} />
      <Route exact path="/cart" component={() => (<h1>cart</h1>)} />
    </Switch>
  </BrowserRouter>
)
