import React from 'react'
import PropTypes from 'prop-types'

const Payable = ({
  status,
  amount,
  fee,
  recipientId,
  paymentDate,
  dateCreated,
}) => (
  <div>
    <ul>
      <li>
        id do recebedor: ${recipientId}
      </li>
      <li>
        Valor: R$: ${amount}
      </li>
      <li>
        Taxas: R$: ${fee}
      </li>
      <li>
        Status: ${status}
      </li>
      <li>
        Data da criação : ${dateCreated}
      </li>
      <li>
        Data do pagamento : ${paymentDate}
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
