import onlyNumber from '../onlyNumber'

const normalizeCreditCard = (value) => {
  if (!value) {
    return value
  }

  const creditCardNumbers = onlyNumber(value)

  if (creditCardNumbers.length <= 4) {
    return creditCardNumbers
  }

  if (creditCardNumbers.length <= 8) {
    return `${creditCardNumbers.slice(0, 4)} ${creditCardNumbers.slice(4)}`
  }

  if (creditCardNumbers.length <= 12) {
    return `${creditCardNumbers.slice(0, 4)} ${creditCardNumbers.slice(4, 8)} ${creditCardNumbers.slice(8, 12)}`
  }

  if (creditCardNumbers.length <= 16) {
    return `${creditCardNumbers.slice(0, 4)} ${creditCardNumbers.slice(4, 8)} ${creditCardNumbers.slice(8, 12)} ${creditCardNumbers.slice(12, 16)}`
  }

  return `${creditCardNumbers.slice(0, 4)} ${creditCardNumbers.slice(4, 8)} ${creditCardNumbers.slice(8, 12)} ${creditCardNumbers.slice(12, 16)} ${creditCardNumbers.slice(16, 19)}`
}

export default normalizeCreditCard
