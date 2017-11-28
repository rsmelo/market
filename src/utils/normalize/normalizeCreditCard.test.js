import normalizeCreditCard from './normalizeCreditCard'

describe('normalizeCreditCard', () => {
  it('should return the value when value is falsy', () => {
    const value = null
    expect(normalizeCreditCard(value)).toBe(value)
  })
  it('should return only value numbers when value numbers length <=4', () => {
    const value = '4532a'
    expect(normalizeCreditCard(value)).toBe('4532')
  })
  it('should return only value numbers with parcial mask when value numbers length > 4 and <=8', () => {
    const value = '4532a8809'
    expect(normalizeCreditCard(value)).toBe('4532 8809')
  })
  it('should return only value numbers with parcial mask when value numbers length > 8 and <=12', () => {
    const value = '4532880971a12'
    expect(normalizeCreditCard(value)).toBe('4532 8809 7112')
  })
  it('should return only value numbers with parcial mask when value numbers length > 12 and <=16', () => {
    const value = '45328809711211d28'
    expect(normalizeCreditCard(value)).toBe('4532 8809 7112 1128')
  })
  it('should return only value numbers with parcial mask when value numbers length > 16', () => {
    const value = '4532880971121128123'
    expect(normalizeCreditCard(value)).toBe('4532 8809 7112 1128 123')
  })
  it('should return only value numbers with mask cleaning extra characters', () => {
    const value = '45328809711211281234567'
    expect(normalizeCreditCard(value)).toBe('4532 8809 7112 1128 123')
  })
})
