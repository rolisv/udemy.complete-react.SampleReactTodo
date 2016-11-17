const React = require('react')
const ReactDom = require('react-dom')
const expect = require('expect')
const $ = require('jquery')
const TestUtils = require('react-addons-test-utils')

const TodoApp = require('TodoApp');
const TodoApi = require('TodoApi');

describe('TodoApp', () => {
  beforeEach(() => {
    localStorage.removeItem('todos')
  })

  it('should exist', () => {
    expect(TodoApp).toExist()
  })

  it('should be empty todos, when created', () => {
    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>)

    expect(todoApp.state.todos).toEqual([])
  })

  it('should add to item to state on handleAddTodo', () => {
    const todoText = 'todo text'
    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>)

    todoApp.setState({todos: []})
    todoApp.handleAddTodo(todoText)

    expect(todoApp.state.todos[0].text).toBe(todoText)
    expect(TodoApi.getTodos()).toEqual(todoApp.state.todos)
  })

  it('should toggle item completed state on handleToggle', () => {
    const todoItem = {
      id: 11,
      text: 'some todo',
      completed: false
    }
    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>)

    todoApp.setState({todos: [todoItem]})

    expect(todoApp.state.todos[0].completed).toBe(false)
    todoApp.handleToggle(todoItem.id)
    expect(todoApp.state.todos[0].completed).toBe(true)
    expect(TodoApi.getTodos()).toEqual(todoApp.state.todos)
  })
})
