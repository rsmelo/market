import { createAction } from 'redux-actions'

import {
  GET_PRODUCTS,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
} from './types'

export const getProducts = createAction(GET_PRODUCTS)
export const productsRequest = createAction(PRODUCTS_REQUEST)
export const productsSuccess = createAction(PRODUCTS_SUCCESS)
export const productsFailure = createAction(PRODUCTS_FAILURE)
