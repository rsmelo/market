import onlyNumber from '../onlyNumber'

const normalizeCardExpirationDate = (value) => {
  if (!value) {
    return value
  }

  const cardExpirationnumbers = onlyNumber(value)

  if (cardExpirationnumbers.length <= 2) {
    return cardExpirationnumbers
  }

  return `${cardExpirationnumbers.slice(0, 2)}/${cardExpirationnumbers.slice(2, 4)}`
}

export default normalizeCardExpirationDate
