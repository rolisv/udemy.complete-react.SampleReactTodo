const React = require('react');
const moment = require('moment');
const PropTypes = React.PropTypes;

const Todo = React.createClass({

  render: function () {
    const {id, text, completed, createdAt, completedAt} = this.props;
    const rednerDate = () => {
      const dateFormat = 'YYYY-MM-DD HH:mm'

      if (completed) {
        return 'Completed ' + moment.unix(completedAt).format(dateFormat)
      } else {
        return 'Created ' + moment.unix(createdAt).format(dateFormat)
      }
    }

    return (
      <div onClick={() => {
        this.props.onToggle(id)
      }}>
        <input type="checkbox" checked={completed}/>
        <p>{text}</p>
        <p>{rednerDate()}</p>
      </div>
    );
  }

});

module.exports = Todo;
