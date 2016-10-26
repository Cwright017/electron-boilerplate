import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import todos from '../redux/todo-redux'

const middleware = [thunkMiddleware];

// if (process.env.NODE_ENV === 'dev') {
//     middleware.push(createLogger())
// }

const store = createStore(
  combineReducers({
    todos
  }),
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
)

export default store
