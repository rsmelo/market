import { handleActions } from 'redux-actions'

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  REMOVE_CART,
} from './types'
import {
  loadFromStorage,
  saveToStorage,
} from '../../utils/storage'

const CART = 'CART'
const initialState = {
  bySeller: loadFromStorage(CART),
}

const addBySeller = (cart, product) => {
  const sellerId = product.seller.id
  const hasSeller = Object.prototype.hasOwnProperty.call(cart, sellerId)
  let newSellerCart

  if (hasSeller) {
    const sellerCart = cart[sellerId]
    newSellerCart = Object.assign(
      {},
      sellerCart,
      {
        products: [...sellerCart.products, product],
      }
    )
  } else {
    newSellerCart = {
      seller: product.seller,
      products: [product],
    }
  }

  const newCart = Object.assign(
    {},
    cart,
    {
      [sellerId]: newSellerCart,
    }
  )
  return newCart
}

const addProduct = (state, { payload }) => {
  const newState = Object.assign(
    {},
    state,
    {
      bySeller: addBySeller(state.bySeller, payload),
    }
  )
  saveToStorage(CART, newState.bySeller)
  return newState
}

const removeSellerCart = (cart, sellerId) => {
  const newCart = Object.assign({}, cart)
  delete newCart[sellerId]
  return newCart
}

const removeBySeller = (cart, { sellerId, id }) => {
  const sellerCart = cart[sellerId]
  const products = sellerCart.products.filter(product => product.id !== id)

  if (products.length === 0) {
    return removeSellerCart(cart, sellerId)
  }

  return Object.assign(
    {},
    cart,
    {
      [sellerId]: {
        seller: sellerCart.seller,
        products,
      },
    }
  )
}

const removeProduct = (state, { payload }) => {
  const newState = Object.assign(
    {},
    state,
    {
      bySeller: removeBySeller(state.bySeller, payload),
    }
  )
  saveToStorage(CART, newState.bySeller)
  return newState
}

const removeCart = (state, { payload }) => {
  const newState = Object.assign(
    {},
    state,
    {
      bySeller: removeSellerCart(state.bySeller, payload),
    }
  )
  saveToStorage(CART, newState.bySeller)
  return newState
}

const handler = {
  [ADD_PRODUCT]: addProduct,
  [REMOVE_PRODUCT]: removeProduct,
  [REMOVE_CART]: removeCart,
}

const cart = handleActions(handler, initialState)

export default cart

export const productExistsInCart = (state, id, sellerId) => {
  const sellerExists = Object.prototype.hasOwnProperty.call(state.bySeller, sellerId)
  if (sellerExists) {
    return state.bySeller[sellerId].products.some(product => product.id === id)
  }
  return false
}

export const getCartList = state => Object.keys(state.bySeller).map(key => state.bySeller[key])
export const getCartBySeller = (state, sellerId) => state.bySeller[sellerId]
