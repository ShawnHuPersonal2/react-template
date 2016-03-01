'use strict';

import React from 'react';

require('styles//PhoneSimulator.styl');

class PhoneSimulatorComponent extends React.Component {
  render() {
    let cols = [];
    for (let i = 0; i < 12; i++) {
        cols.push(<div key={'col' + i} ref={'col' + i} className='col-xs-1'/>)
    }
    return (
      <div className="phonesimulator">
          <div className="row">
            {cols}
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
