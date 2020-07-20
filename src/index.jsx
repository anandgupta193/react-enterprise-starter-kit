import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import rootSagas from './sagas';
import Routes from './routes/Routes';

const sagaMiddleware = createSagaMiddleware();
let middlware = applyMiddleware(sagaMiddleware);

// adding redux devtools for developmennt mode
if (__DEVELOPMENT__) {
  middlware = composeWithDevTools(middlware);
}

const store = createStore(reducers, middlware);
sagaMiddleware.run(rootSagas);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
