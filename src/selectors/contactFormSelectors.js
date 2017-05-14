// @flow

function getContactFormState(state: Object): Object {
  return state.contactFormReducer ? state.contactFormReducer : state;
}

function getIsPosting(state: Object): boolean {
  return getContactFormState(state).isPosting;
}

function getHasPosted(state: Object): boolean {
  return getContactFormState(state).hasPosted;
}

function getErrorMsg(state: Object): string {
  return getContactFormState(state).errorMsg;
}

export {
  getContactFormState,
  getIsPosting,
  getHasPosted,
  getErrorMsg
}
