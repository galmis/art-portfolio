// @flow

import React from 'react';
import {
  Form,
  FormGroup,
  Col,
  FormControl,
  Button,
  ControlLabel
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Loadable from 'react-loading-overlay';

import ContactAlert from './ContactAlert';

class ContactForm extends React.Component {

  state: {
    name: string,
    email: string,
    message: string
  };

  constructor(props: Object) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  _onSubmit(event: Object) {
    debugger;
    event.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }
    this.props.actions.postData('/api/postEmail', data);
  }

  _onChange(property: string, event: Object) {
    const val = event.target.value;
    this.setState({
      [property]: val
    });
  }

  _renderAlert() {
    if (this.props.isAlertVisible) {
      const { errorMsg, actions } = this.props;
      debugger;
      const isError = errorMsg ? true : false;
      const alertText = isError ? errorMsg : 'Yay! Your message has been successfully sent.';
      return (
        <ContactAlert isError={isError} text={alertText} resetPostAlert={actions.resetPostAlert} />
      );
    }
  }

  render() {
    debugger;
    const { isPosting } = this.props;

    return (
      <Loadable spinner active={isPosting} text='Sending...'>
        { this._renderAlert() }

        <Form horizontal onSubmit={this._onSubmit.bind(this)}>
          <FormGroup controlId="formHorizontalName">
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={10}>
              <FormControl required type="text" placeholder="Your name" onChange={this._onChange.bind(this, 'name')} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl required type="email" placeholder="Email" onChange={this._onChange.bind(this, 'email')}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalMessage">
            <Col componentClass={ControlLabel} sm={2}>
              Message
            </Col>
            <Col sm={10}>
              <FormControl required componentClass="textarea" rows={10} placeholder="Message" onChange={this._onChange.bind(this, 'message')} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                Send
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Loadable>
    );
  }
}

// ContactForm.propTypes = {
//   errorMsg: PropTypes.string.isRequired,
//   isPosting: PropTypes.boolean.isRequired,
//   isAlertVisible: PropTypes.boolean.isRequired
// };

export default ContactForm;
