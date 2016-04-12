'use strict';
import React from 'react';
import {borderRadiusFunc} from 'model'

function replaceBorderRadius(styles) {
  let borderRadiusStr = borderRadiusFunc.toString(styles.borderRadius);
  return Object.assign({}, styles, {borderRadius: borderRadiusStr});
}

class Canvas extends React.Component {
  render() {
    let styles = replaceBorderRadius(this.props.styles);
    return (
      <div className="editor-canvas" style={styles}>
        ddfafdsa
      </div>
    );
  }
}

Canvas.displayName = 'Canvas';

export default Canvas;
