import normalizeCPF from './normalizeCPF'

describe('normalizeCPF', () => {
  it('should return the value when value is falsy', () => {
    const value = null
    expect(normalizeCPF(value)).toBe(value)
  })

  it('should return only value numbers when value numbers length <=3', () => {
    const value = '232e'
    expect(normalizeCPF(value)).toBe('232')
  })

  it('should return only value numbers with parcial mask when value numbers between 4 and 6', () => {
    const value = '232.252e'
    expect(normalizeCPF(value)).toBe('232.252')
  })

  it('should return only value numbers with parcial mask when value numbers between 7 and 9', () => {
    const value = '232.252.305e'
    expect(normalizeCPF(value)).toBe('232.252.305')
  })

  it('should return only value numbers with mask when value numbers >= 10', () => {
    const value = '232.252.305-45'
    expect(normalizeCPF(value)).toBe('232.252.305-45')
  })
  it('should return only value numbers with mask cleaning extra characters', () => {
    const value = '232.252.305-456'
    expect(normalizeCPF(value)).toBe('232.252.305-45')
  })
})
