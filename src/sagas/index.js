import { fork } from 'redux-saga/effects';
import UserSaga from './IncrUserCountSaga';

// List of all the sagas
export default function* rootSagas() {
  yield* [
    fork(UserSaga),
  ];
}
