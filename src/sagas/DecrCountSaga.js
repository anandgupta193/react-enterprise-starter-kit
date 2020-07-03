import { takeLatest, put, call } from 'redux-saga/effects';
import { DECREMENT, DECREMENT_SUCCESS } from '../actionTypes/CounterActionTypes';
import RestClient from '../utils/RestClient';

function* incrementUserCountSaga(action) {
  const requestObject = {
    url: `base-url/${action.payload.queryParam}`,
  };
  const response = yield call(RestClient.get, requestObject);
  yield put({ type: DECREMENT_SUCCESS, payload: response });
}

export default function* watchIncrementCountSaga() {
  yield takeLatest(DECREMENT, incrementUserCountSaga);
}
