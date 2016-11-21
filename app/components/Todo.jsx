const React = require('react');
const moment = require('moment');
const PropTypes = React.PropTypes;

const Todo = React.createClass({

  render: function () {
    const {id, text, completed, createdAt, completedAt} = this.props;
    const todoClass = completed
      ? 'todo todo-completed'
      : 'todo'
    const rednerDate = () => {
      const dateFormat = 'YYYY-MM-DD HH:mm'

      if (completed) {
        return 'Completed ' + moment.unix(completedAt).format(dateFormat)
      } else {
        return 'Created ' + moment.unix(createdAt).format(dateFormat)
      }
    }

    return (
      <div
        className={todoClass}
        onClick={() => {
        this.props.onToggle(id)
      }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{rednerDate()}</p>
        </div>
      </div>
    );
  }

});

module.exports = Todo;
