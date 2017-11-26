import onlyNumber from '../onlyNumber'

const normalizeCPF = (value) => {
  if (!value) {
    return value
  }

  const cpfNumbers = onlyNumber(value)

  if (cpfNumbers.length <= 3) {
    return cpfNumbers
  }

  if (cpfNumbers.length <= 6) {
    return `${cpfNumbers.slice(0, 3)}.${cpfNumbers.slice(3)}`
  }

  if (cpfNumbers.length <= 9) {
    return `${cpfNumbers.slice(0, 3)}.${cpfNumbers.slice(3, 6)}.${cpfNumbers.slice(6)}`
  }

  return `${cpfNumbers.slice(0, 3)}.${cpfNumbers.slice(3, 6)}.${cpfNumbers.slice(6, 9)}-${cpfNumbers.slice(9, 11)}`
}

export default normalizeCPF
