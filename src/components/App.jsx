import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCount, substractCount } from '../actions/CounterAction';
import { INCREASE_COUNTER, DECREASE_COUNTER } from '../constants/AppConstants';

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementCounter = () => dispatch(addCount());
  const decrementCounter = () => dispatch(substractCount());

  return (
    <div className="App">
      <button type="button"><Link to="/Home">Home</Link></button>
      <h1>
        { `Counter ${counter}` }
      </h1>
      <button type="button" onClick={incrementCounter}>
        { INCREASE_COUNTER }
      </button>
      <button type="button" onClick={decrementCounter}>
        { DECREASE_COUNTER }
      </button>
    </div>
  );
};

export default App;
