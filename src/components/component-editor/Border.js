'use strict';
import React from 'react';
import {Input, DropdownButton, MenuItem} from 'react-bootstrap';
import Slider from '../Slider';

const borderStyles = ['dotted','dashed','solid','double','groove','ridge','inset','outset'];

class Border extends React.Component {
  render() {
    console.log(this.props.actions)
    let borders = borderStyles.map((name)=><MenuItem key={name} eventKey={name}>
      <div style={{display: 'inline-block', width: '5em'}}>{name}</div>
      <div style={{display: 'inline-block', width: '5em', height: '1em', border: name + ' 3px black'}}/>
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
        </div>
        <Input type="select" label="宽度" placeholder="像素">
          <option value="1">select</option>
          <option value="2">...</option>
        </Input>
      </div>
    );
  }
}

Border.displayName = 'Border';

export default Border;
