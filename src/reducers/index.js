// @flow

import contactFormReducer, { testObj as contactFormTestObj } from './contactFormReducer';

export default {
  contactFormReducer
}

export const testObj = {
  [contactFormReducer.name]: contactFormTestObj,
}
