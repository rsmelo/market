import { handleActions } from 'redux-actions'

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
} from './types'

const initialState = {
  bySeller: {},
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

const addProduct = (state, { payload }) => Object.assign(
  {},
  state,
  {
    bySeller: addBySeller(state.bySeller, payload),
  }
)

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

const removeProduct = (state, { payload }) => Object.assign(
  {},
  state,
  {
    bySeller: removeBySeller(state.bySeller, payload),
  }
)


const handler = {
  [ADD_PRODUCT]: addProduct,
  [REMOVE_PRODUCT]: removeProduct,
}

const cart = handleActions(handler, initialState)

export default cart
