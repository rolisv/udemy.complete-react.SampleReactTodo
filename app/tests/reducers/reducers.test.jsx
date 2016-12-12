const expect = require('expect');
const df = require('deep-freeze-strict');
const reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'looking for...'
      }

      expect(reducers.searchTextReducer(df(''), df(action))).toEqual(action.searchText)
    })
  })

  describe('toggleShowCompletedReducer', () => {
    it('should toggle show completed flag', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }

      expect(reducers.showCompletedReducer(df(false), df(action))).toBe(true)
    })
  })
})
