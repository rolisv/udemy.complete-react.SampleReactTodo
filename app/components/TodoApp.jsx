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
          text: 'walk the dog'
        }, {
          id: uuid(),
          text: 'clean the yard'
        }, {
          id: uuid(),
          text: 'feed ze cat'
        }
      ]
    }
  },

  handleAddTodo: function (todoText) {
    this.setState({
      todos: [
        ...this.state.todos, {
          id: uuid(),
          text: todoText
        }
      ]
    })
  },
  handleSearch: function (searchText, showCompleted) {
    console.log('Search:', searchText, showCompleted);
    this.setState({searchText: searchText.toLowerCase(), showCompleted});
  },

  render: function () {
    const {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodoForm onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }

});

module.exports = TodoApp;
