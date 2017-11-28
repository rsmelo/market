import fetchProduct from './api'


describe('product api', () => {
  describe('fetchProduct', () => {
    it('should return a product by id', async () => {
      const product = {
        id: 'cf242328-7d3e-41e6-b4e5-611bf6a2c34e',
        name: 'Nitendo 3DS',
        price: 800,
        image: 'https://images-na.ssl-images-amazon.com/images/I/81oybRmFZnL._AC_.jpg',
        description: 'Portátil da nintendo que todo mundo usa só pra jogar pokemon',
        category: 'video games',
        seller: {
          id: 're_cjabsxlgq01t5oq6f3ix79dsn',
          name: 'João',
        },
      }

      const expected = {
        statusCode: 200,
        status: '200 OK',
        data: product,
      }

      const response = await fetchProduct('cf242328-7d3e-41e6-b4e5-611bf6a2c34e')
      expect(response).toEqual(expected)
    })
  })
})
