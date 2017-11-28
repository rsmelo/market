import isCpfValid from './isCpfValid'

describe('isCpfValid', () => {
  it('should be a function', () => {
    expect(typeof isCpfValid).toBe('function')
  })

  describe('when strCPF param is not a string', () => {
    it('should throw an Error', () => {
      expect(isCpfValid).toThrow('strCPF must be a string')
    })
  })

  describe('when 0000000000 provided as param', () => {
    it('should return false', () =>
      expect(isCpfValid('00000000000')).toBe(false))
  })

  describe('when provided param length is less then 11', () => {
    it('should return false', () =>
      expect(isCpfValid('0000000000')).toBe(false))
  })

  describe('when provided param length is greater then 11', () => {
    it('should return false', () =>
      expect(isCpfValid('000000000000')).toBe(false))
  })

  describe('when a invalid second check digit is providad', () => {
    it('should return false', () =>
      expect(isCpfValid('06017411968')).toBe(false))
  })

  describe('when a invalid first check digit is providad', () => {
    it('should return true', () =>
      expect(isCpfValid('06017411979')).toBe(false))
  })

  describe('when a valid CPF is provided as param', () => {
    it('should return true', () =>
      expect(isCpfValid('06017411969')).toBe(true))
  })
})
