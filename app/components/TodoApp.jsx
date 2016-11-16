const React = require('react');
const TodoSearch = require('TodoSearch');
const TodoList = require('TodoList');
const AddTodoForm = require('AddTodoForm');
const uuid = require('node-uuid');
const PropTypes = React.PropTypes;

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      searchText: '',
      showCompleted: false,
      todos: [
        {
          id: uuid(),
          text: 'walk the dog',
          completed: false
        }, {
          id: uuid(),
          text: 'clean the yard',
          completed: true
        }, {
          id: uuid(),
          text: 'feed ze cat',
          completed: false
        }
      ]
    }
  },

  handleAddTodo: function (todoText) {
    this.setState({
      todos: [
        ...this.state.todos, {
          id: uuid(),
          text: todoText,
          completed: false
        }
      ]
    })
  },
  handleSearch: function (searchText, showCompleted) {
    console.log('Search:', searchText, showCompleted);
    this.setState({searchText: searchText.toLowerCase(), showCompleted});
  },
  handleToggle: function (id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })

    this.setState({todos: updatedTodos})
  },

  render: function () {
    const {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodoForm onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }

});

module.exports = TodoApp;
