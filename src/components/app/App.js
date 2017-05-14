// @flow

import React, { Component } from 'react';

import Navigator from './Navigator';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigator />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
