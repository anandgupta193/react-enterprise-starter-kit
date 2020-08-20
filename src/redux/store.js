import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import rootSagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
let middleware = applyMiddleware(sagaMiddleware);

// adding redux devtools for developmennt mode
if (__DEVELOPMENT__) {
  middleware = composeWithDevTools(middleware);
}

// eslint-disable-next-line no-underscore-dangle
const initialState = !__SERVER__ ? window.__PRELOADED__STATE__ : {};

const store = createStore(reducers, initialState, middleware);

if (__SERVER__) {
  store.runSaga = sagaMiddleware.run;
} else {
  sagaMiddleware.run(rootSagas);
}

export default store;
