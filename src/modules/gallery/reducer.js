import { handleActions } from 'redux-actions'

import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
} from './types'

const initialState = {
  products: null,
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

const productsRequest = state => Object.assign(
  {},
  state,
  {
    isFetching: true,
  }
)

const productsFailure = state => Object.assign(
  {},
  state,
  {
    isFetching: false,
  }
)

const handler = {
  [PRODUCTS_SUCCESS]: productsSuccess,
  [PRODUCTS_REQUEST]: productsRequest,
  [PRODUCTS_FAILURE]: productsFailure,
}

const gallery = handleActions(handler, initialState)

export default gallery

export const getProducts = state => state.products
export const getIsFetching = state => state.isFetching
