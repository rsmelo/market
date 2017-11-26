import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Order = ({ order }) => (
  order && (
    <div>
      Valor: {order.amount}
      <div>
        <Link to="/">Voltar a loja</Link>
      </div>
    </div>
  )
)

Order.defaultProps = {
  order: null,
}

Order.propTypes = {
  order: PropTypes.shape({}),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
}
export default Order
