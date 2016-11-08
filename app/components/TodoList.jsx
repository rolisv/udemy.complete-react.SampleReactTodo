const React = require('react');
const Todo = require('Todo');
const PropTypes = React.PropTypes;

const TodoList = React.createClass({

  render: function () {
    const {todos} = this.props;
    function renderTodos() {
      return todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>
      })
    };

    return (
      <div>{renderTodos()}</div>
    );
  }

});

module.exports = TodoList;
