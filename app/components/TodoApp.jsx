const React = require('react');
const TodoSearch = require('TodoSearch');
const TodoList = require('TodoList');
const AddTodoForm = require('AddTodoForm');
const PropTypes = React.PropTypes;

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      searchText: '',
      showCompleted: false,
      todos: [
        {
          id: 1,
          text: 'walk the dog'
        }, {
          id: 2,
          text: 'clean the yard'
        }, {
          id: 3,
          text: 'feed ze cat'
        }
      ]
    }
  },

  handleAddTodo: function (todoText) {
    console.log('Adding todo:', todoText);
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
