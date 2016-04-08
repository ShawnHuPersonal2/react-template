'use strict';
import React from 'react';

class Canvas extends React.Component {
  render() {
    return (
      <div className="editor-canvas" style={this.props.editorPanel}>

      </div>
    );
  }
}

Canvas.displayName = 'Canvas';

export default Canvas;
