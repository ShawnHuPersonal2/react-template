'use strict';

import React from 'react';
//import {findDOMNode} from 'react-dom';

require('styles//PhoneSimulator.styl');
//import $ from 'jquery'

class PhoneSimulatorComponent extends React.Component {
  componentDidMount() {
  }
  render() {
    let cols = [];
    for (let i = 0; i < 12; i++) {
        cols.push(<div key={'col' + i} ref={'col' + i} className='col-xs-1'/>)
    }
    let {width, height} = this.props.phone;
    return (
      <div className="phonesimulator">
        <div ref="wrapper" className="wrapper" style={{width, height}}>
          <div ref="content" className="header container-fluid">
            <div className="row phone-header">
            </div>
            <div className="row wechat-header">
            </div>
          </div>
          <div ref="content" className="content">
            <div className="grid">
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
