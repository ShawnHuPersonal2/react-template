'use strict';
import React from 'react';
import {borderRadiusFunc} from 'model'

function replaceBorderRadius(styles) {
  let borderRadius = borderRadiusFunc.process(styles.borderRadius);
  return Object.assign({}, styles, borderRadius);
}

class Canvas extends React.Component {
  render() {
    let styles = replaceBorderRadius(this.props.styles);
    console.log(styles)
    return (
      <div className="editor-canvas" style={styles}>
        ddfafdsa
      </div>
    );
  }
}

Canvas.displayName = 'Canvas';

export default Canvas;
