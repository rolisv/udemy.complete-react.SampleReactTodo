const React = require('react');
const uuid = require('node-uuid');
const moment = require('moment');

const TodoSearch = require('TodoSearch');
const TodoList = require('TodoList');
const AddTodoForm = require('AddTodoForm');
const TodoApi = require('TodoApi');
const PropTypes = React.PropTypes;

const TodoApp = React.createClass({
  getInitialState: function () {
    return {searchText: '', showCompleted: false, todos: TodoApi.getTodos()}
  },
  componentDidUpdate: function () {
    console.log('Storing todos:', this.state.todos);
    TodoApi.setTodos(this.state.todos)
  },

  handleAddTodo: function (todoText) {
    this.setState({
      todos: [
        ...this.state.todos, {
          id: uuid(),
          text: todoText,
          completed: false,
          createdAt: moment().unix()
        }
      ]
    })
  },
  handleSearch: function (searchText, showCompleted) {
    // console.log('Search:', searchText, showCompleted);
    this.setState({searchText: searchText.toLowerCase(), showCompleted});
  },
  handleToggle: function (id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed

        if (todo.completed) {
          todo.completedAt = moment().unix()
        } else {
          delete todo.completedAt
        }
      }

      return todo
    })

    this.setState({todos: updatedTodos})
  },

  render: function () {
    const {todos, searchText, showCompleted} = this.state;
    const filteredTodos = TodoApi.filterTodos(todos, searchText, showCompleted)

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
        <AddTodoForm onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }

});

module.exports = TodoApp;
