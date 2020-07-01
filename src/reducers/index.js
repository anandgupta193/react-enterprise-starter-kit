import { combineReducers } from 'redux';
import currentUser from './CurrentUserReducer';
import counter from './CounterReducer';

const rootReducer = combineReducers({
  currentUser,
  counter,
});

export default rootReducer;
