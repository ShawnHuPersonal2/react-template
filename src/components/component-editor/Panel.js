'use strict';
import React from 'react';
import CollapsiblePanel from '../CollapsiblePanel';
import Border from './Border';
import BorderRadius from './BorderRadius'

class Panel extends React.Component {
  render() {
    let {borderExpanded, borderRadiusExpanded} = this.props.editorPanel.panelStatus;
    return (
      <div className='editor-styles'>
        <div className="panel-group">
          <CollapsiblePanel expanded={borderExpanded} onToggle={()=>this.props.actions.toggleBorderPanel(!borderExpanded)} header="边框">
            <Border editorPanel={this.props.editorPanel} actions={this.props.actions}/>
          </CollapsiblePanel>
          <CollapsiblePanel expanded={borderRadiusExpanded} onToggle={()=>this.props.actions.toggleBorderRadiusPanel(!borderRadiusExpanded)} header="边角">
            <BorderRadius editorPanel={this.props.editorPanel} actions={this.props.actions}/>
          </CollapsiblePanel>
        </div>
      </div>
    );
  }
}

Panel.displayName = 'Panel';

export default Panel;
