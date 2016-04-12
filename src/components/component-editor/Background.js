'use strict';
import React from 'react';

class Background extends React.Component {
  render() {
    return (
      <div className="editor-background">
        <div className="wrapper">
        {this.props.children}
        </div>
      </div>
    );
  }
}

Background.displayName = 'Background';

export default Background;
