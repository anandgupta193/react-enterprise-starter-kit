import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App';
import reducers from './reducers';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('mountNode'),
);
