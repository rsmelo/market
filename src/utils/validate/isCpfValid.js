const sumPositionsMultiplication = (positionsArray, multiplier) => (
  positionsArray.reduce((acc, item, index) => (
    acc + (parseInt(item, 10) * (multiplier - index))
  ), 0)
)

const calculateReminder = sum => ((sum * 10) % 11)

const adjustReminderIfNeeded = remainder => (
  (remainder === 10) || (remainder === 11) ? 0 : remainder
)

const isCpfValid = (strCPF) => {
  if (typeof strCPF !== 'string') {
    throw new Error('strCPF must be a string')
  }

  let sum = 0
  let remainder
  const cpfOnlyNums = strCPF.replace(/[^\d]/g, '')

  if (cpfOnlyNums === '00000000000' || cpfOnlyNums.length !== 11) {
    return false
  }

  const arrayCPF = [...cpfOnlyNums]

  sum = sumPositionsMultiplication(arrayCPF.slice(0, 9), 10)

  remainder = calculateReminder(sum)
  remainder = adjustReminderIfNeeded(remainder)

  if (remainder !== parseInt(arrayCPF[9], 10)) {
    return false
  }

  sum = sumPositionsMultiplication(arrayCPF.slice(0, 10), 11)
  remainder = calculateReminder(sum)
  remainder = adjustReminderIfNeeded(remainder)

  if (remainder !== parseInt(arrayCPF[10], 10)) {
    return false
  }

  return true
}

export default isCpfValid
