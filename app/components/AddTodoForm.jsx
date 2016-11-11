const React = require('react');
const PropTypes = React.PropTypes;

const AddTodoForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault()

    const todoRef = this.refs.todo
    const todoText = todoRef.value
    console.log('Entered todo:', todoText);

    if (todoText.length > 0) {
      todoRef.value = ''
      this.props.onAddTodo(todoText)
    } else {
      this.refs.todo.focus()
    }
  },

  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="add-todo-form">
          <input type="text" ref="todo" placeholder="Enter TODO here"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }

});

module.exports = AddTodoForm;
