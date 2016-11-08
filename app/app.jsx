const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

const TodoApp = require('TodoApp');

//Load foundation
$(document).foundation()

require('style!css!sass!appStyles')

ReactDOM.render(
  <TodoApp/>, document.getElementById('app'));
