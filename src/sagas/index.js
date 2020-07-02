import { fork } from 'redux-saga/effects';
import UserSaga from './UserSaga';

// List of all the sagas
export default function* rootSagas() {
  yield* [
    fork(UserSaga),
  ];
}
