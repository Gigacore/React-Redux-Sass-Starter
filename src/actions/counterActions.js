export function incrementNum(payload) {
  return {
    type: "INCREMENT_NUM",
    payload: payload
  }
}

export function decrementNum(payload) {
  return {
    type: "DECREMENT_NUM",
    payload: payload
  }
}

export function resetCounter(payload) {
  return {
    type: "RESET",
    payload: payload
  }
}