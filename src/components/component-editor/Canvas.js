'use strict';
import React from 'react';
import {findDOMNode} from 'react-dom';
import {borderFunc, borderRadiusFunc, jssFunc} from 'model'

function replaceBorderRadius(styles) {
  let borderRadius = borderRadiusFunc.process(styles.borderRadius);
  return Object.assign({}, styles, borderRadius);
}
function replaceBorder(styles) {
  let border = borderFunc.process(styles.border);
  return Object.assign({}, styles, border);
}

class Canvas extends React.Component {
  componentDidMount() {
    let styles = replaceBorderRadius(this.props.styles);
    styles = replaceBorder(styles);
    let css = jssFunc.toPlainCss(styles);
    findDOMNode(this.refs.target).setAttribute('style', css);
  }
  componentDidUpdate() {
    let styles = replaceBorderRadius(this.props.styles);
    styles = replaceBorder(styles);
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
