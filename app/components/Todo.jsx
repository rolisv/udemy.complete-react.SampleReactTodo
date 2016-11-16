const React = require('react');
const PropTypes = React.PropTypes;

const Todo = React.createClass({

  render: function () {
    const {id, text, completed} = this.props;

    return (
      <div onClick={() => {
        this.props.onToggle(id)
      }}>
        <input type="checkbox" checked={completed} defaultChecked/> {text}
      </div>
    );
  }

});

module.exports = Todo;
