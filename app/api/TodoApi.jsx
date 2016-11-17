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
  },
  filterTodos: function (todos, searchText, showCompleted) {
    return todos.filter(todo => {
      if (!showCompleted && todo.completed) {
        return false
      }

      return todo.text.toLowerCase().indexOf(searchText) > -1
    }).sort((a, b) => {
      return a.completed
        ? (b.completed
          ? 0
          : 1)
        : (b.completed
          ? -1
          : 0)
    })
  }
};
