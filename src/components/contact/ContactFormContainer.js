// @flow

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ContactForm from './ContactForm';

import {
  getIsPosting,
  getHasPosted,
  getErrorMsg
} from '../../selectors/contactFormSelectors';
import { postData, resetPostAlert } from '../../actions/creators/postDataActions';

// building props
function mapStateToProps(state: Object) {
  return {
    errorMsg: getErrorMsg(state),
    isPosting: getIsPosting(state),
    isAlertVisible: getHasPosted(state)
  }
}

function mapDispatchToProps(dispatch) {

  return {
    actions: bindActionCreators({ postData, resetPostAlert }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
