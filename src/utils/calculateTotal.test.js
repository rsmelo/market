import calculateTotal from './calculateTotal'

describe('calculateTotal', () => {
  it('should return the total sum of price properties', () => {
    const items = [
      {
        price: 10,
      },
      {
        price: 20,
      },
    ]
    expect(calculateTotal(items)).toBe(30)
  })
  it('should return 0 when parameter array length === 0', () => {
    const items = []
    expect(calculateTotal(items)).toBe(0)
  })
  it('should throw "items must be an Array" when parameter is not an array', () => {
    const items = {}
    expect(() => {
      calculateTotal(items)
    }).toThrowError('items must be an Array')
  })
})
