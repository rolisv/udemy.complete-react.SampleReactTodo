const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation
$(document).foundation()

require('style!css!sass!appStyles')

ReactDOM.render(
  <p>Boilerplate 3 project</p>, document.getElementById('app'));
