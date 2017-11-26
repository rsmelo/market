import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import gallery, * as fromGallery from './gallery/reducer'
import cart, * as fromCart from './cart/reducer'
import order, * as fromOrder from './order/reducer'

const rootReducer = combineReducers({
  form: formReducer,
  gallery,
  cart,
  order,
})

export default rootReducer

export const getGalleryProducts = state => fromGallery.getProducts(state.gallery)
export const getGalleryIsFetching = state => fromGallery.getIsFetching(state.gallery)
export const getGalleryProductById = (state, id) => fromGallery.getProductById(state.gallery, id)
export const getExistProductInCart = (state, id, sellerId) =>
  fromCart.productExistsInCart(state.cart, id, sellerId)
export const getCartList = state => fromCart.getCartList(state.cart)
export const getCartBySeller = (state, sellerId) => fromCart.getCartBySeller(state.cart, sellerId)
export const getOrder = (state, id) => fromOrder.getOrder(state.order, id)
