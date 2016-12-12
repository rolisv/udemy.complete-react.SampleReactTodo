const expect = require('expect');
const df = require('deep-freeze-strict');
const moment = require('moment');
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

  describe('showCompletedReducer', () => {
    it('should toggle show completed flag', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }

      expect(reducers.showCompletedReducer(df(false), df(action))).toEqual(true)
    })
  })

  describe('todosReducer', () => {
    it('should add todo', () => {
      const action = {
        type: 'ADD_TODO',
        text: 'walk the dog'
      }

      const res = reducers.todosReducer(df([]), df(action))
      expect(res.length).toEqual(1)
      expect(res[0].text).toEqual(action.text)
    })

    it('should complete todo', () => {
      const todos = [
        {
          id: 11,
          text: 'save files',
          completed: false
        }, {
          id: 22,
          text: 'reboot pc',
          completed: true
        }
      ]
      const action = {
        type: 'TOGGLE_TODO',
        id: 11
      }

      const timeBefore = moment().unix()
      const res = reducers.todosReducer(df(todos), df(action))
      const timeAfter = moment().unix()

      expect(res[0].completed).toEqual(true)
      expect(res[0].completedAt).toBeGreaterThanOrEqualTo(timeBefore)
      expect(res[0].completedAt).toBeLessThanOrEqualTo(timeAfter)
    })

    it('should uncomplete todo', () => {
      const todos = [
        {
          id: 11,
          text: 'save files',
          completed: false
        }, {
          id: 22,
          text: 'reboot pc',
          completed: true,
          completedAt: moment().unix()
        }
      ]
      const action = {
        type: 'TOGGLE_TODO',
        id: 22
      }

      const timeBefore = moment().unix()
      const res = reducers.todosReducer(df(todos), df(action))
      console.log('res', res);
      const timeAfter = moment().unix()

      expect(res[0].completed).toEqual(false)
      expect(res[0].completedAt).toNotExist()
    })
  })
})
