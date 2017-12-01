import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import style from './style.css'
import Payable from './Payable'
import ButtonLink from '../../../components/ButtonLink'
import formatCurrency from '../../../utils/formatCurrency'

const statuses = {
  processing: 'processando',
  authorized: 'autorizado',
  paid: 'pago',
  refunded: 'reembolsado',
  waiting_payment: 'aguardando pagamento',
  pending_refund: 'reembolso pendente',
  refused: 'recusado',
}

class Order extends PureComponent {
  constructor (props) {
    super(props)
    this.renderPayables = this.renderPayables.bind(this)
  }

  renderPayables () {
    const { payables } = this.props.order
    if (payables.length) {
      return (
        <div>
          <h4 className={style.payablesTitle}>Recebíveis </h4>
          <div className={style.payablesContainer}>
            {payables.map(payable => <Payable {...payable} key={payable.recipientId} />)}
          </div>
        </div>
      )
    }
    return null
  }

  render () {
    const { order } = this.props
    return (
      <div className={style.container}>
        <div className={style.content} >
          <h2 className={style.title}>Detalhes do pedido</h2>
          <ul className={style.transaction}>
            <li className={style.item}>
              Transação: <span className={style.value}>{order.id}</span>
            </li>
            <li className={style.item}>
              Status: <span className={style.value}>{statuses[order.status]}</span>
            </li>
            <li className={style.item}>
              Valor: <span className={style.value}>{formatCurrency(order.amount)}</span>
            </li>
          </ul>
          {this.renderPayables()}
          <div className={style.buttonContainer}>
            <ButtonLink to="/">
              Voltar a loja
            </ButtonLink>
          </div>
        </div>
      </div>
    )
  }
}

Order.defaultProps = {
  order: null,
}

Order.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    payables: PropTypes.arrayOf(PropTypes.shape({
      status: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      fee: PropTypes.number.isRequired,
      recipientId: PropTypes.string.isRequired,
      paymentDate: PropTypes.string.isRequired,
      dateCreated: PropTypes.string.isRequired,
    })).isRequired,
  }),
}
export default Order
