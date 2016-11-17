const $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos))
      return todos
    }
  },
  getTodos: function () {
    try {
      let todos = JSON.parse(localStorage.getItem('todos'))

      return $.isArray(todos)
        ? todos
        : []
    } catch (e) {
      return []
    }
  }
};
