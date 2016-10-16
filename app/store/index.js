import { combineReducers, createStore } from 'redux'

import todos from '../redux/todo-redux'

const store = createStore(
  combineReducers({
    todos
  })
)

export default store
