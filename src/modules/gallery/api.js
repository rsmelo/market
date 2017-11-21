import productsJSON from '../../mocks/products.json'

const fetchProducts = () => new Promise((resolve) => {
  setTimeout(() => {
    const response = {
      statusCode: 200,
      status: '200 OK',
      data: productsJSON,
    }
    resolve(response)
  }, 100)
})

export default fetchProducts
