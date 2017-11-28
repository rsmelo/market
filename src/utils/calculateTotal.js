const totalReducer = (acc, current) => acc + current.price

const calculateTotal = (items) => {
  if (!Array.isArray(items)) {
    throw new Error('items must be an Array')
  }

  return items.reduce(totalReducer, 0)
}

export default calculateTotal
