import { createAction } from 'redux-actions'

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
} from './types'

export const addProduct = createAction(ADD_PRODUCT)
export const removeProduct = createAction(REMOVE_PRODUCT, (id, sellerId) => ({ id, sellerId }))
