import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@storybook/react/demo';
import { addCount, substractCount } from '../actions/CounterAction';
import { INCREASE_COUNTER, DECREASE_COUNTER } from '../constants/AppConstants';

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementCounter = () => dispatch(addCount());
  const decrementCounter = () => dispatch(substractCount());

  return (
    <div className="App">
      <Button type="button"><Link to="/Home">Home</Link></Button>
      <h1>
        { `Counter ${counter}` }
      </h1>
      <Button type="button" onClick={incrementCounter}>
        { INCREASE_COUNTER }
      </Button>
      <Button type="button" onClick={decrementCounter}>
        { DECREASE_COUNTER }
      </Button>
    </div>
  );
};

export default App;
