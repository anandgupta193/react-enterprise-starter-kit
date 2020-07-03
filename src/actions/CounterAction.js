import { INCREMENT, DECREMENT } from '../actionTypes/CounterActionTypes';

export const addCount = () => ({
  type: INCREMENT,
});

export const substractCount = () => ({
  type: DECREMENT,
});
