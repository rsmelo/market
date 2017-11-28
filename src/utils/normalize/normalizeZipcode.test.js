import normalizeZipcode from './normalizeZipcode'

describe('normalizeZipcode', () => {
  it('should return the value when value is falsy', () => {
    const value = null
    expect(normalizeZipcode(value)).toBe(value)
  })

  it('should return only value numbers when value numbers length <=5', () => {
    const value = '88050a'
    expect(normalizeZipcode(value)).toBe('88050')
  })
  it('should return only value numbers when value numbers length  >5', () => {
    const value = '88050001'
    expect(normalizeZipcode(value)).toBe('88050-001')
  })
  it('should return only value numbers with mask cleaning extra characters', () => {
    const value = '88050001234'
    expect(normalizeZipcode(value)).toBe('88050-001')
  })
})
