import { combineReducers } from 'redux';
import counter from './CounterReducer';

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
