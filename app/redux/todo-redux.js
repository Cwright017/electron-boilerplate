import { createReducer } from '../utils/redux-utils.js';

//Action types
const ADD_TODO = 'ADD_TODO';

//Action creators
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

//reducers
const todos = createReducer([], {
    [ADD_TODO](state, action) {
      return state.concat([ action.text ]);
    }
});

export default todos
