import productsJSON from '../../mocks/products.json'

const fetchProduct = id => new Promise((resolve) => {
  setTimeout(() => {
    const product = productsJSON.find(item => item.id === id)
    const response = {
      statusCode: 200,
      status: '200 OK',
      data: product,
    }
    resolve(response)
  }, 500)
})

export default fetchProduct
