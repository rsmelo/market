import { createAction } from 'redux-actions'

import {
  GET_PRODUCT,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
} from './types'

export const getProduct = createAction(GET_PRODUCT)
export const productRequest = createAction(PRODUCT_REQUEST)
export const productSuccess = createAction(PRODUCT_SUCCESS)
export const productFailure = createAction(PRODUCT_FAILURE)
