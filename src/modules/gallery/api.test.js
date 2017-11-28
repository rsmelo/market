import fetchProducts from './api'
import products from '../../mocks/products.json'


describe('gallery api', () => {
  describe('fetchProducts', () => {
    it('should return a product by id', async () => {
      const expected = {
        statusCode: 200,
        status: '200 OK',
        data: products,
      }

      const response = await fetchProducts()
      expect(response).toEqual(expected)
    })
  })
})
