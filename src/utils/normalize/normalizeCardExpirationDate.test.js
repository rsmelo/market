import normalizeCardExpirationDate from './normalizeCardExpirationDate'

describe('normalizeCardExpirationDate', () => {
  it('should return the value when value is falsy', () => {
    const value = null
    expect(normalizeCardExpirationDate(value)).toBe(value)
  })

  it('should return only value numbers when value length <=2', () => {
    const value = '0e'
    expect(normalizeCardExpirationDate(value)).toBe('0')
  })

  it('should return only value numbers with mask when value length > 2', () => {
    const value = '01/1'
    expect(normalizeCardExpirationDate(value)).toBe('01/1')
  })

  it('should return only value numbers with mask cleaning extra characters', () => {
    const value = '01/191'
    expect(normalizeCardExpirationDate(value)).toBe('01/19')
  })
})
