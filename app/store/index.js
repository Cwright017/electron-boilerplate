import { combineReducers, createStore, applyMiddleware } from 'redux'

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import todos from '../redux/todo-redux'

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'dev') {
    middlewares.push(createLogger())
}

const store = createStore(
  combineReducers({
    todos
  }),
  applyMiddleware(...middlewares)
)

export default store
