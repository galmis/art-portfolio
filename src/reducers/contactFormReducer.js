// @flow

import {
  POST_DATA,
  POST_DATA_SUCCESS,
  POST_DATA_ERROR,
  RESET_POST_ALERT
} from '../constants/ACTION_TYPE';
import type { Action } from '../types';

const initialState = {
  isPosting: false,
  hasPosted: false,
  errorMsg: ''
};

export const testObj = {
  initialState
};

export default function contactFormReducer(state: Object = initialState, action: Action) {
  switch(action.type) {
    case POST_DATA: {
      return {
        ...state,
        hasPosted: false,
        isPosting: true
      }
    }
    case POST_DATA_SUCCESS: {
      return {
        ...state,
        hasPosted: true,
        isPosting: false,
        errorMsg: ''
      }
    }
    case POST_DATA_ERROR: {
      return {
        ...state,
        hasPosted: true,
        isPosting: false,
        errorMsg: action.payload.errorMsg
      }
    }
    case RESET_POST_ALERT: {
      return {
        ...state,
        hasPosted: false
      }
    }

    default:
      return state;
  }
}
