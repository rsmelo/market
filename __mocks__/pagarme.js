
const pagarme = jest.genMockFromModule('pagarme')

const mockCreate = ({ amount }) => (new Promise((resolve) => {
  resolve({ amount })
}))

const mockFind = ({ transactionId }) => (new Promise((resolve) => {
  resolve([
    { transactionId },
    { transactionId },
  ])
}))

const client = {
  connect: () => (new Promise((resolve) => {
    resolve({
      transactions: {
        create: mockCreate,
      },
      payables: {
        find: mockFind,
      },
    })
  })),
}

pagarme.client = client

export default pagarme
