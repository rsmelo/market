import normalizePhone from './normalizePhone'

describe('normalizePhone', () => {
  it('should return the value when value is falsy', () => {
    const value = null
    expect(normalizePhone(value)).toBe(value)
  })

  it('should return only value numbers when value numbers equal zero', () => {
    const value = '('
    expect(normalizePhone(value)).toBe('')
  })
  it('should return only value numbers with parcial mask when value numbers <= 2', () => {
    const value = '(12a'
    expect(normalizePhone(value)).toBe('(12')
  })
  it('should return only value numbers with parcial mask when value numbers <= 3', () => {
    const value = '(12)3'
    expect(normalizePhone(value)).toBe('(12) 3')
  })
  it('should return only value numbers with parcial mask when value numbers <= 6', () => {
    const value = '(12)3456'
    expect(normalizePhone(value)).toBe('(12) 3456')
  })
  it('should return only value numbers with parcial mask when value numbers > 6', () => {
    const value = '(12)345678901'
    expect(normalizePhone(value)).toBe('(12) 3456-78901')
  })
  it('should return only value numbers with mask cleaning extra characters', () => {
    const value = '(12)34567890123'
    expect(normalizePhone(value)).toBe('(12) 3456-78901')
  })
})
