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
export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([ action.text ])
    default:
      return state
  }
}