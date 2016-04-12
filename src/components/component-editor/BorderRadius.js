'use strict';
import _ from 'lodash';
import React from 'react';
import {Tabs, Tab, Input, Button, DropdownButton, MenuItem, OverlayTrigger, Popover} from 'react-bootstrap';
import Slider from '../Slider';
import CrossSliders from '../CrossSliders';
import { SketchPicker }  from 'react-color';

const borderStyles = ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'];
function getBorders(keyPrefix) {
  return borderStyles.map((name)=><MenuItem key={keyPrefix + name} eventKey={name}>
    <div style={{display: 'inline-block', width: '5em'}}>{name}</div>
    <div style={{display: 'inline-block', width: '5em', height: '1em', border: name + ' 3px black'}}></div>
  </MenuItem>);
}

class BorderRadiusSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showColorPicker: false};
    this.onColorSelected = this.onColorSelected.bind(this);
    this.onWidthSelected = this.onWidthSelected.bind(this);
    this.onStyleSelected = this.onStyleSelected.bind(this);
  }
  onColorSelected(color) {
    this.props.actions.setBorderColor(color.rgb, this.props.side);
  }
  onWidthSelected(values) {
    this.props.actions.setBorderWidth(parseInt(values[0]), this.props.side);
  }
  onStyleSelected(e, style) {
    this.props.actions.setBorderStyle(style, this.props.side);
  }
  render() {
    let styles = this.props.editorPanel.styles;
    let side = _.capitalize(this.props.side);
    let borderWidth = styles['border' + side + 'Width'] ? styles['border' + side + 'Width'] : styles['borderWidth'];
    //let borderStyle = styles['border' + side + 'Style'] ? styles['border' + side + 'Style'] : styles['borderStyle'];
    let borderColor = styles['border' + side + 'Color'] ? styles['border' + side + 'Color'] : styles['borderColor'];
    return (
      <div className={'row border-settings' + side}>
        <div className="border-radius">
          <Input type="radio" name="border-radius-type" label="像素" standalone groupClassName="radio-wrapper"/>
          <Input type="radio" name="border-radius-type" label="百分比" standalone groupClassName="radio-wrapper"/>
        </div>
        <div className='col-xs-8'>
          <Slider
            range={{min: 0, max: 100}}
            start={[borderWidth]}
            step={1}
            connect='lower'
            style={{background:this.props.editorPanel.styles.borderColor}}
            onChange={this.onWidthSelected}
            />
        </div>
        <div className='col-xs-4'>
          <DropdownButton bsStyle={'primary'} bsSize='xsmall' title={'样式'} id='border-style-selector'
                          onSelect={this.onStyleSelected}>
            {getBorders('')}
          </DropdownButton>
          <OverlayTrigger trigger='click' rootClose placement='left' overlay={
              <Popover id='border-color-picker'><SketchPicker
              color={ borderColor }
              onChangeComplete={this.onColorSelected} type='sketch' /></Popover>
            }>
            <Button bsStyle='primary' bsSize='xsmall'
                    style={{background:borderColor}}>颜色</Button>
          </OverlayTrigger>
        </div>
      </div>
    );
  }
}

class BorderRadius extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showColorPicker: false};
    this.onColorSelected = this.onColorSelected.bind(this);
  }
  onColorSelected(color) {
    this.props.actions.setBorderColor(color.rgb);
  }
  render() {
    let styles = this.props.editorPanel.styles;
    return (
      <div className='border-radius'>
        <div className='result text-center'><pre>{styles.borderRadius + 'px ' + styles.borderStyle + ' ' + styles.borderColor}</pre></div>

        <Tabs defaultActiveKey={1}>
          <Tab eventKey={1} title="所有边框">
            <div className='all'>
              <CrossSliders vertical={{range: {min: 0, max: 100}, start:[1], step:1, connect:'lower'}}
                            horizontal={{range: {min: 0, max: 100}, start:[1], step:1, connect:'lower'}}/>
            </div>
          </Tab>
          <Tab eventKey={2} title="分别设置">
            <div className='border-separated'>
              <label>上边</label>
              <BorderRadiusSettings side='top' {...this.props}/>
              <label>右边</label>
              <BorderRadiusSettings side='right' {...this.props}/>
              <label>下边</label>
              <BorderRadiusSettings side='bottom' {...this.props}/>
              <label>左边</label>
              <BorderRadiusSettings side='left' {...this.props}/>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

BorderRadius.displayName = 'BorderRadius';

export default BorderRadius;
