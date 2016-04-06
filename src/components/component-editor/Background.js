'use strict';
import React from 'react';

class Background extends React.Component {
  render() {
    return (
      <div className="editor-background">
        {this.props.children}
      </div>
    );
  }
}

Background.displayName = 'Background';

export default Background;
