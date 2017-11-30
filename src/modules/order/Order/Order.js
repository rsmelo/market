import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import style from './style.css'
import Payable from './Payable'
import ButtonLink from '../../../components/ButtonLink'


class Order extends PureComponent {
  constructor (props) {
    super(props)
    this.renderPayables = this.renderPayables.bind(this)
  }

  renderPayables () {
    const { payables } = this.props.order
    return payables.map(payable => <Payable {...payable} key={payable.id} />)
  }

  render () {
    const { order } = this.props
    return (
      <div className={style.container}>
        <div className={style.content} >
          <h2 className={style.title}>Detalhes do pedido</h2>
          <ul className={style.transaction}>
            <li>
              Transação: {order.id}
            </li>
            <li>
              Valor: {order.amount}
            </li>
          </ul>
          <div>
            <h4 className={style.payablesTitle}>Recebíveis </h4>
            <div className={style.payablesContainer}>
              {this.renderPayables()}
            </div>
          </div>
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
    payables: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  }),
}
export default Order
