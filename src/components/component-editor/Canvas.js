'use strict';
import React from 'react';
import {findDOMNode} from 'react-dom';
import {borderFunc, borderRadiusFunc, jssFunc} from 'model'
import Editor from 'react-medium-editor';

require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

function replaceBorderRadius(styles) {
  let borderRadius = borderRadiusFunc.process(styles.borderRadius);
  return Object.assign({}, styles, borderRadius);
}
function replaceBorder(styles) {
  let border = borderFunc.process(styles.border);
  return Object.assign({}, styles, border);
}

class Canvas extends React.Component {
  constructor(props){
    super(props)
    this.state={text:''};
  }
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
      <Editor className="editor-canvas" ref='target'
        tag="div"
        text={this.state.text}
        onChange={this.handleChange}
        options={{toolbar: {buttons: ['bold', 'italic', 'underline']}}}
      />
    );
  }
}

Canvas.displayName = 'Canvas';

export default Canvas;
