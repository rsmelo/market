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
      <li className={style.item}>
        ID do recebedor: <span className={style.value}>{recipientId}</span>
      </li>
      <li className={style.item}>
        Valor: <span className={style.value}>{formatCurrency(amount)}</span>
      </li>
      <li className={style.item}>
        Taxas: <span className={style.value}>{formatCurrency(fee)}</span>
      </li>
      <li className={style.item}>
        Status: <span className={style.value}>{statuses[status]}</span>
      </li>
      <li className={style.item}>
        Data da criação: <span className={style.value}>{moment(dateCreated).format('DD/MM/YYYY')}</span>
      </li>
      <li className={style.item}>
        Data do pagamento: <span className={style.value}>{moment(paymentDate).format('DD/MM/YYYY')}</span>
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
