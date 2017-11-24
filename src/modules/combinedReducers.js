import { combineReducers } from 'redux'

import gallery, * as fromGallery from './gallery/reducer'
import cart, * as fromCart from './cart/reducer'

const rootReducer = combineReducers({
  gallery,
  cart,
})

export default rootReducer

export const getGalleryProducts = state => fromGallery.getProducts(state.gallery)
export const getGalleryIsFetching = state => fromGallery.getIsFetching(state.gallery)
export const getGalleryProductById = (state, id) => fromGallery.getProductById(state.gallery, id)
export const getExistProductInCart = (state, id, sellerId) =>
  fromCart.productExistsInCart(state.cart, id, sellerId)
export const getCartList = state => fromCart.getCartList(state.cart)
