import { INCREMENT, DECREMENT } from '../actionTypes/CounterActionTypes';

// TODO: Please rename these methods @shubhamsWEB
const increment = () => ({
  type: INCREMENT,
});

const decrement = () => ({
  type: DECREMENT,
});

export default {
  increment,
  decrement,
};
