const React = require('react')
const ReactDom = require('react-dom')
const expect = require('expect')
const $ = require('jquery')
const TestUtils = require('react-addons-test-utils')

const TodoList = require('TodoList');
const Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist()
  })

  it('should render one Todo component for each todo item', () => {
    const todos = [
      {
        id: 1,
        text: 'walk the dog'
      }, {
        id: 2,
        text: 'clean the yard'
      }
    ]

    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
    const todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)

    expect(todoComponents.length).toBe(todos.length)
  })
})
