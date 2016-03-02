'use strict';

import React from 'react';
import {findDOMNode} from 'react-dom';

require('styles//PhoneSimulator.styl');
import $ from 'jquery'

class PhoneSimulatorComponent extends React.Component {
  componentDidMount() {
  }
  render() {
    let cols = [];
    for (let i = 0; i < 12; i++) {
        cols.push(<div key={'col' + i} ref={'col' + i} className='col-xs-1'/>)
    }
    return (
      <div className="phonesimulator">
        <h1>aaa</h1>
        <div ref="wrapper" className="wrapper">
          <div ref="content" className="content container-fluid">
            <h1>aaa</h1>
            <div className="row">
              {cols}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PhoneSimulatorComponent.displayName = 'PhoneSimulatorComponent';

// Uncomment properties you need
// PhoneSimulatorComponent.propTypes = {};
// PhoneSimulatorComponent.defaultProps = {};

export default PhoneSimulatorComponent;
