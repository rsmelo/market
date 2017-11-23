import { handleActions, combineActions } from 'redux-actions'

import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
} from './types'

import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE,

} from '../product/types'

const initialState = {
  products: [],
  isFetching: false,
}


const productsSuccess = (state, { payload }) => Object.assign(
  {},
  state,
  {
    products: payload,
    isFetching: false,
  }
)

const setIsFetching = value => state => Object.assign(
  {},
  state,
  {
    isFetching: value,
  }
)

const productSuccess = (state, { payload }) => {
  const { products } = state
  const newProducts = [...products]
  const currentIndex = newProducts.findIndex(item => item.id === payload.id)
  if (currentIndex > -1) {
    newProducts[currentIndex] = payload
  } else {
    newProducts.push(payload)
  }
  return Object.assign(
    {},
    state,
    {
      products: newProducts,
      isFetching: false,
    }
  )
}

const handler = {
  [PRODUCTS_SUCCESS]: productsSuccess,
  [PRODUCT_SUCCESS]: productSuccess,
  [combineActions(PRODUCTS_REQUEST, PRODUCT_REQUEST)]: setIsFetching(true),
  [combineActions(PRODUCTS_FAILURE, PRODUCT_FAILURE)]: setIsFetching(false),
}

const gallery = handleActions(handler, initialState)

export default gallery

export const getProducts = state => state.products
export const getIsFetching = state => state.isFetching
export const getProductById = (state, id) => state.products.find(product => id === product.id)
