// @flow

import { put, call } from 'redux-saga/effects';

import { post } from '../../services/api';
import type { Action } from '../../types';
import { postDataSuccess, postDataError } from '../creators/postDataActions';

function* postData(action: Action): Generator<*, *, *> {
  console.log('post data requested');
  try {
    const { data, url } = action.payload;
    const response = yield call(post, url, data);
    if (response) {
      yield put(postDataSuccess());
    } else {
      yield put(postDataError('Contact failed. Please try again.'));
    }
  } catch(error) {
    yield put(postDataError(error.message));
  }
}

export {
  postData
}
