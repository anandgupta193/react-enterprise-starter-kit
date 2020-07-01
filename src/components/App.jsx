import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../actions';

const App = () => {
  const counter = useSelector((state) => state.counter);
  const currentUser = useSelector((state) => state.currentUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.userActions.setUser({ name: 'shubham' }));
  }, [dispatch]);

  return (
    <div className="App">
      {currentUser.loggedIn ? (
        <>
          <h1>
            Hello,
            {currentUser.user.name}
          </h1>
          <button type="button" onClick={() => dispatch(allActions.userActions.logOut())}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h1>Login</h1>
          <button type="button" onClick={() => dispatch(allActions.userActions.setUser({ name: 'shubham' }))}>
            Login
          </button>
        </>
      )}
      <h1>
        Counter:
        {counter}
      </h1>
      <button type="button" onClick={() => dispatch(allActions.counterActions.increment())}>
        Increase Counter
      </button>
      <button type="button" onClick={() => dispatch(allActions.counterActions.decrement())}>
        Decrease Counter
      </button>
    </div>
  );
};

export default App;
