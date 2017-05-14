// @flow

import {
  POST_DATA,
  POST_DATA_SUCCESS,
  POST_DATA_ERROR,
  RESET_POST_ALERT
} from '../../constants/ACTION_TYPE';
import type { Action, ContactData } from '../../types';

function postData(url: string, data: ContactData): Action {
  return {
    type: POST_DATA,
    payload: {
      url,
      data
    }
  };
}

function resetPostAlert(): Action {
  return {
    type: RESET_POST_ALERT,
    payload: { }
  };
}

function postDataSuccess() {
  return {
    type: POST_DATA_SUCCESS,
    payload: { }
  }
}

function postDataError(errorMsg: string) {
  return {
    type: POST_DATA_ERROR,
    payload: {
      errorMsg
    }
  }
}

export {
  postData,
  resetPostAlert,
  postDataSuccess,
  postDataError,
}
