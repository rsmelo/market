import { handleActions } from 'redux-actions'

import types from './types'
import {
  loadFromStorage,
  saveToStorage,
} from '../../utils/storage'

const ORDER = 'ORDER'
const initialState = loadFromStorage(ORDER)

const addOrder = (state, { payload }) => {
  const newState = Object.assign(
    {},
    state,
    {
      [payload.id]: payload,
    }
  )
  saveToStorage(ORDER, newState)
  return newState
}

const handler = {
  [types.ADD_ORDER]: addOrder,
}

const order = handleActions(handler, initialState)

export default order

export const getOrder = (state, id) => state[id]
