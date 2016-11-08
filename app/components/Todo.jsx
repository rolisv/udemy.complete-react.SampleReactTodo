const React = require('react');
const PropTypes = React.PropTypes;

const Todo = React.createClass({

  render: function () {
    const {id, text} = this.props;

    return (
      <div>{id} {text}</div>
    );
  }

});

module.exports = Todo;
