//require('bootstrap/dist/css/bootstrap.css');
require('styles/App.styl');

import React from 'react';
import PhoneSimulator from './PhoneSimulator';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="container">
          <div className="col-lg-6">
            <PhoneSimulator/>
          </div>
        </div>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
