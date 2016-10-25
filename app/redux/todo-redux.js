import Immutable from 'immutable';
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
const initialState = Immutable.List();
const todos = createReducer(initialState, {
    [ADD_TODO](state, action) {
      return state.push(action.text);
    }
});

export default todos
