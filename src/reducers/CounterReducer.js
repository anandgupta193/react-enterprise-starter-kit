import { INCREMENT_SUCCESS, DECREMENT_SUCCESS } from '../actionTypes/CounterActionTypes';

const counter = (state = 1, action) => {
  switch (action.type) {
    case INCREMENT_SUCCESS:
      return state + 1;
    case DECREMENT_SUCCESS:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
