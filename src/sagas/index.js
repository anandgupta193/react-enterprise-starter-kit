import { fork } from 'redux-saga/effects';
import IncrCounterSaga from './IncrCountSaga';
import DecrCounterSaga from './DecrCountSaga';

// List of all sagas combined as root sagas
export default function* rootSagas() {
  yield* [fork(IncrCounterSaga), fork(DecrCounterSaga)];
}
