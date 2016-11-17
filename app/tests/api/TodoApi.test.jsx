const expect = require('expect');
const TodoApi = require('TodoApi');

describe('TodoApi', () => {
  beforeEach(() => {
    localStorage.removeItem('todos')
  })

  it('should exist', () => {
    expect(TodoApi).toExist()
  })

  describe('setTodos', () => {
    it('should work with []', () => {
      let todos = []
      TodoApi.setTodos(todos)

      expect(JSON.parse(localStorage.getItem('todos'))).toEqual(todos)
    })

    it('should set a valid array', () => {
      let todos = [
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
      TodoApi.setTodos(todos)

      expect(JSON.parse(localStorage.getItem('todos'))).toEqual(todos)
    })

    it('should not set a non-array', () => {
      let todos = {
        a: 'a',
        b: 'b'
      }
      TodoApi.setTodos(todos)

      expect(localStorage.getItem('todos')).toBe(null)
    })
  })

  describe('getTodos', () => {
    it('should return [], when there is no localStorage data', () => {
      expect(TodoApi.getTodos()).toEqual([])
    })

    it('should return array when valid data stored', () => {
      let todos = [
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

      localStorage.setItem('todos', JSON.stringify(todos))

      expect(TodoApi.getTodos()).toEqual(todos)
    })
  })
})
