const totalReducer = (acc, current) => acc + current.price
const calculateTotal = products => products.reduce(totalReducer, 0)

export default calculateTotal
