'use strict';
import React from 'react';
import {Panel} from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <h4>{this.props.text}<a href='#' onClick={
          (e)=> {
            e.preventDefault();
            this.props.onToggle();
          }
        }><span
        className="glyphicon glyphicon-menu-hamburger pull-right" style={{fontSize: '0.8em'}}></span></a></h4>
    );
  }
}

class CollapsiblePanel extends React.Component {
  render() {
    return (
      <Panel expanded={this.props.expanded} collapsible header={<Header onToggle={this.props.onToggle} text={this.props.header}/>}>
        {this.props.children}
      </Panel>
    );
  }
}

CollapsiblePanel.displayName = 'CollapsiblePanel';

export default CollapsiblePanel;
