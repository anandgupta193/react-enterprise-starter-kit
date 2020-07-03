import { takeLatest, put, call } from 'redux-saga/effects';
import { INCREMENT, INCREMENT_SUCCESS } from '../actionTypes/CounterActionTypes';
import RestClient from '../Utils/RestClient';

function* incrementUserCountSaga(action) {
  const requestObject = {
    url: `base-url/${action.payload.queryParam}`,
  };
  const response = yield call(RestClient.get, requestObject);
  yield put({ type: INCREMENT_SUCCESS, payload: response });
}

export default function* watchUserSaga() {
  yield takeLatest(INCREMENT, incrementUserCountSaga);
}
