// @flow

import React from 'react';
import {
  Alert
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const ContactAlert = (props: Object) => {

  const { text, isError, resetPostAlert } = props;

  const _onDismiss = () => {
    resetPostAlert();
  };

  return (
    <Alert bsStyle={ isError ? "danger" : "success"} onDismiss={_onDismiss}>
      <p>{ text }</p>
    </Alert>
  );
};

// ContactAlert.propTypes = {
//   text: PropTypes.string.isRequired,
//   isError: PropTypes.boolean.isRequired
// };

export default ContactAlert;
