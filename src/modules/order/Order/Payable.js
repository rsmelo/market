import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import formatCurrency from '../../../utils/formatCurrency'
import style from './Payable.style.css'

const statuses = {
  paid: 'pago',
  waiting_funds: 'aguardando fundos',
}
const Payable = ({
  status,
  amount,
  fee,
  recipientId,
  paymentDate,
  dateCreated,
}) => (
  <div className={style.payable}>
    <ul>
      <li>
        ID do recebedor: {recipientId}
      </li>
      <li>
        Valor: {formatCurrency(amount)}
      </li>
      <li>
        Taxas: {formatCurrency(fee)}
      </li>
      <li>
        Status: {statuses[status]}
      </li>
      <li>
        Data da criação: {moment(dateCreated).format('DD/MM/YYYY')}
      </li>
      <li>
        Data do pagamento: {moment(paymentDate).format('DD/MM/YYYY')}
      </li>
    </ul>
  </div>
)

Payable.propTypes = {
  status: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  fee: PropTypes.number.isRequired,
  recipientId: PropTypes.string.isRequired,
  paymentDate: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
}
export default Payable
