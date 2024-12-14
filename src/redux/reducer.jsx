import React from 'react'

export default function reducer(state = { num: 0 }, action) {
  switch (action.type) {
    case 'incrementer':
      return { ...state, num: state.num + 1 }
    case 'decrementer':
      return { ...state, num: state.num - 1 }
    case 'reset':
      return { ...state, num: 0 }
    default:
      return state;
  }
}
