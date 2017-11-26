import onlyNumber from '../onlyNumber'

const normalizeZipCode = (value) => {
  if (!value) {
    return value
  }

  const zipCodeNumbers = onlyNumber(value)

  if (zipCodeNumbers.length <= 5) {
    return zipCodeNumbers
  }

  return `${zipCodeNumbers.slice(0, 5)}-${zipCodeNumbers.slice(5, 8)}`
}

export default normalizeZipCode
