'use strict';
import React from 'react';

require('styles/Components.styl');

class Components extends React.Component {
  render() {
    return (
      <div className="components">
          <div><button className="btn btn-default" onClick={()=>this.props.actions.push({pathname:'/component'})}>创建</button></div>
          <Component ref="panel"><div className="panel panel-default"/></Component>
      </div>
    );
  }
}

Components.displayName = 'Components';


class Component extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
        <div className="usable-component">{this.props.children}</div>
    );
  }
}

Component.displayName = 'Component';

// Uncomment properties you need
// PhoneSimulatorComponent.propTypes = {};
// PhoneSimulatorComponent.defaultProps = {};

export default Components;
