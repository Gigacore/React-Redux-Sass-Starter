// Reducers receive information from Actions in the form of "Type" and "Payload".
// And they perform a task or execute a fuction accordingly.

// For example, on receiving action type of "INCREMENT_NUM",
// the reducer function will increment the value stored in state, which is 0 initially.

// Read more on Reducers - https://redux.js.org/docs/basics/Reducers.html

import { INCREMENT_NUM, DECREMENT_NUM, RESET } from "../constants/ActionTypes";

export default function reducer(state = 0, action) {
  switch (action.type) {
  case INCREMENT_NUM: 
    return state + 1;
  case DECREMENT_NUM:
    return state - 1;
  case RESET:
    return state = action.payload;
  }

  return state;
}