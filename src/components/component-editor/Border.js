'use strict';
import React from 'react';
import {Button, DropdownButton, MenuItem, OverlayTrigger, Popover} from 'react-bootstrap';
import Slider from '../Slider';
import { SketchPicker }  from 'react-color';

const borderStyles = ['dotted','dashed','solid','double','groove','ridge','inset','outset'];

class Border extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showColorPicker: false};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({showColorPicker: !this.state.showColorPicker});
  }
  render() {
    let borders = borderStyles.map((name)=><MenuItem key={name} eventKey={name}>
      <div style={{display: 'inline-block', width: '5em'}}>{name}</div>
      <div style={{display: 'inline-block', width: '5em', height: '1em', border: name + ' 3px black'}}></div>
    </MenuItem>);
    return (
      <div className="border-radius">
        <div className="form-group">
          <label className="control-label">宽度</label>
          <Slider
            range={{min: 0, max: 100}}
            start={[this.props.editorPanel.styles.borderWidth]}
            step={1}
            connect='lower'
            tooltips={[{to:(num)=>num+'px'}]}
            style={{background:this.props.editorPanel.styles.borderColor}}
            onChange={(values) => this.props.actions.setBorderWidth(parseInt(values[0]))}
            />
        </div>
        <div className="form-group">
          <DropdownButton bsStyle={'primary'} bsSize="xsmall" title={'样式'} id='border-style-selector'
            onSelect={(e,ek)=>this.props.actions.setBorderStyle(ek)}>
            {borders}
          </DropdownButton>

          <OverlayTrigger trigger="click" rootClose placement="left" overlay={
            <Popover><SketchPicker type="sketch" /></Popover>
          }>
            <Button bsStyle='primary' bsSize='xsmall' onClick={ this.handleClick }
                    style={{background:this.props.editorPanel.styles.borderColor}}>颜色</Button>
          </OverlayTrigger>
        </div>
      </div>
    );
  }
}

Border.displayName = 'Border';

export default Border;
