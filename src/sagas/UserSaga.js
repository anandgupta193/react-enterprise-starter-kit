import { takeLatest, put, call } from 'redux-saga/effects';
import RestClient from '../Utils/RestClient';
// Without this import Saga was not working.?? @anandgupta193
import '@babel/polyfill';

function* getUserSaga(action) {
  const requestObject = {
    url: `base-url/${action.payload.queryParam}`,
  };
  const response = yield call(RestClient.get, requestObject);
  yield put({ type: 'SOME_ACTION_TYPE_SUCCESS', payload: response });
}

export default function* watchUserSaga() {
  yield takeLatest('SOME_ACTION_TYPE', getUserSaga);
}
