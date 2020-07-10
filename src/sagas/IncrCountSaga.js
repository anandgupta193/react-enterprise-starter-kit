import { takeLatest, put } from 'redux-saga/effects';
import { INCREMENT, INCREMENT_SUCCESS } from '../actionTypes/CounterActionTypes';
// import RestClient from '../Utils/RestClient';

function* incrementUserCountSaga() {
  try {
    // const response = yield call(RestClient.get, requestObject);
    // console.log(response.data);
  } catch (error) {
    // console.log(error.message);
  }
  yield put({ type: INCREMENT_SUCCESS, payload: {} });
}

export default function* watchIncrementCountSaga() {
  yield takeLatest(INCREMENT, incrementUserCountSaga);
}
