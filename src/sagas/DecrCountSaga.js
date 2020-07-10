import { takeLatest, put } from 'redux-saga/effects';
import { DECREMENT, DECREMENT_SUCCESS } from '../actionTypes/CounterActionTypes';
// import RestClient from '../Utils/RestClient';

function* decrementUserCountSaga() {
  // const requestObject = {
  //   url: `base-url/${action.payload.queryParam}`,
  // };
  // const response = yield call(RestClient.get, requestObject);
  yield put({ type: DECREMENT_SUCCESS, payload: {} });
}

export default function* watchDecrementCountSaga() {
  yield takeLatest(DECREMENT, decrementUserCountSaga);
}
