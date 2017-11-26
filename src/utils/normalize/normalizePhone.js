import onlyNumber from '../onlyNumber'

const normalizePhone = (value) => {
  if (!value) {
    return value
  }

  const phoneNumbers = onlyNumber(value)
  if (phoneNumbers.length === 0) {
    return phoneNumbers
  }

  if (phoneNumbers.length <= 2) {
    return `(${phoneNumbers.slice(0, 2)}`
  }

  if (phoneNumbers.length <= 3) {
    return `(${phoneNumbers.slice(0, 2)}) ${phoneNumbers.slice(2)}`
  }

  if (phoneNumbers.length <= 6) {
    return `(${phoneNumbers.slice(0, 2)}) ${phoneNumbers.slice(2)}`
  }
  return `(${phoneNumbers.slice(0, 2)}) ${phoneNumbers.slice(2, 6)}-${phoneNumbers.slice(6, 11)}`
}

export default normalizePhone
