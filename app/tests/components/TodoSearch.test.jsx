const React = require('react')
const ReactDom = require('react-dom')
const expect = require('expect')
const $ = require('jquery')
const TestUtils = require('react-addons-test-utils')

const TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist()
  })

  it('should call onSearch with entered search text', () => {
    const searchText = 'Dog'
    const spy = expect.createSpy()
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)

    todoSearch.refs.searchText.value = searchText
    TestUtils.Simulate.change(todoSearch.refs.searchText)

    expect(spy).toHaveBeenCalledWith(searchText, false)
  })

  it('should call onSearch with proper showCompleted check value', () => {
    const spy = expect.createSpy()
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)

    todoSearch.refs.showCompleted.checked = true
    TestUtils.Simulate.change(todoSearch.refs.showCompleted)

    expect(spy).toHaveBeenCalledWith('', true)
  })
})
