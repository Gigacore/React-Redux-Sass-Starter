// Actions are payloads of information that send data from your application to your store. 
// They are the only source of information for the store.

// Actions are triggered either by user through interactions or by an events, such as successful AJAX call.

// Read more on Actions - https://redux.js.org/docs/basics/Actions.html

import { INCREMENT_NUM, DECREMENT_NUM, RESET } from "../constants/ActionTypes";

export function incrementNum(payload) {
  return {
    type: INCREMENT_NUM,
    payload: payload
  };
}

export function decrementNum(payload) {
  return {
    type: DECREMENT_NUM,
    payload: payload
  };
}

export function resetCounter(payload) {
  return {
    type: RESET,
    payload: payload
  };
}