import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Payable from './Payable'


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
      <div>
        <div>
          <h2>Detalhes da transação</h2>
          Valor: {order.amount}
          <div>
            {this.renderPayables()}
          </div>
        </div>
        <div>
          <Link to="/">Voltar a loja</Link>
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
    amount: PropTypes.number.isRequired,
    payables: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  }),
}
export default Order
