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
      const todos = []
      TodoApi.setTodos(todos)

      expect(JSON.parse(localStorage.getItem('todos'))).toEqual(todos)
    })

    it('should set a valid array', () => {
      const todos = [
        {
          id: 11,
          text: 'save files',
          compconsted: false
        }, {
          id: 22,
          text: 'reboot pc',
          compconsted: true
        }
      ]
      TodoApi.setTodos(todos)

      expect(JSON.parse(localStorage.getItem('todos'))).toEqual(todos)
    })

    it('should not set a non-array', () => {
      const todos = {
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

    it('should return array, when valid data stored', () => {
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

      localStorage.setItem('todos', JSON.stringify(todos))

      expect(TodoApi.getTodos()).toEqual(todos)
    })

    it('should return [], when non-array is stored', () => {
      const todos = {
        a: 'a',
        b: 'b'
      }

      localStorage.setItem('todos', JSON.stringify(todos))

      expect(TodoApi.getTodos()).toEqual([])
    })
  })

  describe('filterTodos', () => {
    const todos = [
      {
        id: 11,
        text: 'Save files',
        completed: false
      }, {
        id: 22,
        text: 'reBoot pc',
        completed: true
      }, {
        id: 33,
        text: 'reload browser',
        completed: false
      }
    ]

    it('should show completed todos, when showCompleted is true', () => {
      expect(TodoApi.filterTodos(todos, '', true)).toEqual([todos[0], todos[2], todos[1]])
    })

    it('should not show completed todos, when showCompleted is false', () => {
      expect(TodoApi.filterTodos(todos, '', false)).toEqual([todos[0], todos[2]])
    })

    it('should show matching text todos', () => {
      expect(TodoApi.filterTodos(todos, 'sa', true)).toEqual([todos[0]])
      expect(TodoApi.filterTodos(todos, 'boo', true)).toEqual([todos[1]])
      expect(TodoApi.filterTodos(todos, 're', true)).toEqual([todos[2], todos[1]])
    })
  })
})
