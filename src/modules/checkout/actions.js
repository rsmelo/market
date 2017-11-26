import { createAction } from 'redux-actions'

import {
  DO_PAYMENT,
  PAYMENT_REQUEST,
  PAYMENT_SUCCESS,
  PAYMENT_FAILURE,
} from './types'

export const doPayment = createAction(DO_PAYMENT)
export const paymentRequest = createAction(PAYMENT_REQUEST)
export const paymentSuccess = createAction(PAYMENT_SUCCESS)
export const paymentFailure = createAction(PAYMENT_FAILURE)
