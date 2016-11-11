const React = require('react')
const ReactDom = require('react-dom')
const expect = require('expect')
const $ = require('jquery')
const TestUtils = require('react-addons-test-utils')

const AddTodoForm = require('AddTodoForm');

describe('AddTodoForm', () => {
  it('should exist', () => {
    expect(AddTodoForm).toExist()
  })

  it('should call onAddTodo with todo text on submit', () => {
    const todoText = 'another todo'
    const spy = expect.createSpy()
    const addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy}/>)
    const $el = $(ReactDom.findDOMNode(addTodoForm))

    addTodoForm.refs.todo.value = todoText
    TestUtils.Simulate.submit(addTodoForm.refs.form)

    expect(spy).toHaveBeenCalledWith(todoText)
  })

  it('should not call onAddTodo on submit with invalid data', () => {
    const todoText = ''
    const spy = expect.createSpy()
    const addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy}/>)
    const $el = $(ReactDom.findDOMNode(addTodoForm))

    addTodoForm.refs.todo.value = todoText
    TestUtils.Simulate.submit(addTodoForm.refs.form)

    expect(spy).toNotHaveBeenCalled()
  })
})
