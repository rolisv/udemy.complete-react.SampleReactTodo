const uuid = require('node-uuid');
const moment = require('moment');

export const searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText
    default:
      return state
  }
}

export const showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state
    default:
      return state
  }
}

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix()
        }
      ]
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          const todoCopy = {
            ...todo,
            completed: !todo.completed
          }

          if (todoCopy.completed) {
            todoCopy.completedAt = moment().unix()
          } else {
            delete todoCopy.completedAt
            // todoCopy.completedAt = undefined
          }

          return todoCopy
        }

        return todo
      })
    default:
      return state
  }
}
