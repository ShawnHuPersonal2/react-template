'use strict';
import React from 'react';
import {findDOMNode} from 'react-dom';
import {borderRadiusFunc, jssFunc} from 'model'

function replaceBorderRadius(styles) {
  let borderRadius = borderRadiusFunc.process(styles.borderRadius);
  return Object.assign({}, styles, borderRadius);
}

class Canvas extends React.Component {
  componentDidMount() {
    let styles = replaceBorderRadius(this.props.styles);
    let css = jssFunc.toPlainCss(styles);
    findDOMNode(this.refs.target).setAttribute('style', css);
  }
  componentDidUpdate() {
    let styles = replaceBorderRadius(this.props.styles);
    let css = jssFunc.toPlainCss(styles);
    findDOMNode(this.refs.target).setAttribute('style', css);
  }
  render() {
    return (
      <div className="editor-canvas" ref='target'>
        ddfafdsa
      </div>
    );
  }
}

Canvas.displayName = 'Canvas';

export default Canvas;
