import { INCREMENT_SUCCESS, DECREMENT_SUCCESS } from '../actionTypes/CounterActionTypes';

const defaultState = 1;

const counter = (state = defaultState, action) => {
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
