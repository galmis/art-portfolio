// @flow

import React from 'react';
import {
  Grid,
  PageHeader
} from 'react-bootstrap';

import ContactFormContainer from './ContactFormContainer';

const Contact = (props: Object) => {
  return (
    <Grid>
      <PageHeader><small>Contact</small></PageHeader>
      <ContactFormContainer />
    </Grid>
  );
};

export default Contact;
