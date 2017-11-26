import { createAction } from 'redux-actions'

import types from './types'

const addOrder = createAction(types.ADD_ORDER)
export default { addOrder }
