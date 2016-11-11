const React = require('react');
const TodoList = require('TodoList');
const AddTodoForm = require('AddTodoForm');
const PropTypes = React.PropTypes;

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
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

  render: function () {
    const {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodoForm onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }

});

module.exports = TodoApp;
