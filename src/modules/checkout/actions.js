import { createAction } from 'redux-actions'

import types from './types'

const doPayment = createAction(types.DO_PAYMENT)

export default {
  doPayment,
}
