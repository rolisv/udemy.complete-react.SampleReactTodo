const React = require('react');
const Todo = require('Todo');
const PropTypes = React.PropTypes;

const TodoList = React.createClass({

  render: function () {
    const {todos, onToggle} = this.props;
    function renderTodos() {
      return todos.map((todo) => {
        return <Todo key={todo.id} onToggle={onToggle} {...todo}/>
      })
    };

    return (
      <div>{renderTodos()}</div>
    );
  }

});

module.exports = TodoList;
