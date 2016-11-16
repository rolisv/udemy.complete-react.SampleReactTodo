const React = require('react')
const ReactDom = require('react-dom')
const expect = require('expect')
const $ = require('jquery')
const TestUtils = require('react-addons-test-utils')

const Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist()
  })

  it('should call onToggle with item id on click', () => {
    const todoItem = {
      id: 11,
      text: 'some todo',
      completed: false
    }
    const spy = expect.createSpy()
    const todo = TestUtils.renderIntoDocument(<Todo key={todoItem.id} {...todoItem} onToggle={spy}/>)
    let $el = $(ReactDom.findDOMNode(todo))[0]

    TestUtils.Simulate.click($el)

    expect(spy).toHaveBeenCalledWith(todoItem.id)
  })
})
