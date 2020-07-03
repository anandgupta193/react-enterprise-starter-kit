import { INCREMENT_SUCCESS, DECREMENT } from '../actionTypes/CounterActionTypes';

const counter = (state = 1, action) => {
  switch (action.type) {
    case INCREMENT_SUCCESS:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
