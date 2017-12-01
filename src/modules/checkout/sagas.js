import { takeLatest, put, call } from 'redux-saga/effects'
import { stopSubmit, startSubmit } from 'redux-form'

import actions from './actions'
import orderActions from '../order/actions'
import { removeCart } from '../cart/actions'

import {
  createPayment,
  getPayables,
} from './api'

const parsePayable = ({
  status,
  amount,
  fee,
  recipient_id,
  payment_date,
  date_created,
}) => ({
  amount: amount / 100,
  fee: fee / 100,
  recipientId: recipient_id,
  paymentDate: payment_date,
  dateCreated: date_created,
  status,
})
const parsePayables = payables => payables.map(parsePayable)
const parseTranscation = ({ id, amount, status }) => ({
  amount: amount / 100,
  id,
  status,
})
const form = 'checkout'
export function* doPayment ({ payload }) {
  try {
    yield put(startSubmit(form))
    const { data, cart, push } = payload
    const responseTransaction = yield call(createPayment, { data, cart })
    const transaction = parseTranscation(responseTransaction)
    const responsePayables = yield call(getPayables, transaction.id)
    const payables = parsePayables(responsePayables)
    yield put(orderActions.addOrder({ ...transaction, payables }))
    yield call(push, `/order/${transaction.id}`)
    yield put(removeCart(cart.seller.id))
  } catch (error) {
    yield put(stopSubmit(form, { _error: error.message }))
  }
}

export default function* sagas () {
  yield takeLatest(actions.doPayment, doPayment)
}
