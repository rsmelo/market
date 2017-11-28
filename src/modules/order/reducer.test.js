import reducer, { getOrder } from './reducer'
import types from './types'

describe('Order reducer', () => {
  describe('actions in reducer', () => {
    it('should return initial state as default', () => {
      const initialState = {}
      expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should add an order on ORDER/ADD_ORDER', () => {
      const state = {}
      const order = {
        id: 1234,
        amout: 1000,
      }
      const expected = {
        1234: order,
      }
      const action = {
        type: types.ADD_ORDER,
        payload: order,
      }

      expect(reducer(state, action)).toEqual(expected)
    })
  })

  describe('selectors', () => {
    describe('getOrder', () => {
      it('should return isFetching property', () => {
        const order =  {
          id: 1234,
          amout: 1000,
        }

        const state = {
          1234: order,
        }
        expect(getOrder(state, 1234)).toEqual(order)
      })
    })
  })
})
