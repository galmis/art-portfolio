// @flow

import { takeLatest, all } from 'redux-saga/effects';

import { postData } from './postDataSagas';
import { POST_DATA } from '../../constants/ACTION_TYPE';

export default function* rootSaga(): Generator<*, void, *> {
  console.log('root saga running');
  yield all([
    // listen for when FETCH_DATA action is dispatched and call fetchData saga
    takeLatest(POST_DATA, postData),
  ]);
}
