import { takeLatest, put } from 'redux-saga/effects';
import { INCREMENT, INCREMENT_SUCCESS } from '../actionTypes/CounterActionTypes';
// import RestClient from '../Utils/RestClient';

function* incrementUserCountSaga() {
  // const requestObject = {
  //   url: `base-url/${action.payload.queryParam}`,
  // };
  // const response = yield call(RestClient.get, requestObject);
  yield put({ type: INCREMENT_SUCCESS, payload: {} });
}

export default function* watchIncrementCountSaga() {
  yield takeLatest(INCREMENT, incrementUserCountSaga);
}
