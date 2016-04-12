'use strict';
import _ from 'lodash';
import React from 'react';
import {Tabs, Tab, Input, Button, DropdownButton, MenuItem, OverlayTrigger, Popover} from 'react-bootstrap';
import Slider from '../Slider';
import QuarterEllipse from '../QuarterEllipse';
import { SketchPicker }  from 'react-color';
import {borderRadiusFunc} from 'model';

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
    this.onRatioSelected = this.onRatioSelected.bind(this);
    this.onUnitSelected = this.onUnitSelected.bind(this);
    this.onValueSelected = this.onValueSelected.bind(this);
  }
  onColorSelected(color) {
    this.props.actions.setBorderColor(color.rgb);
  }
  onRatioSelected(e) {
    this.props.actions.setBorderRadiusRatio(parseFloat(e.target.value));
  }
  onUnitSelected(e) {
    this.props.actions.setBorderRadiusUnit(e.target.value);
  }
  onValueSelected(values) {
    this.props.actions.setBorderRadiusValue(parseInt(values[0]));
  }
  render() {
    let styles = this.props.editorPanel.styles;
    let { ratio, unit, value } = styles.borderRadius;
    return (
      <div className='border-radius'>
        <div className='result text-center'><pre>{borderRadiusFunc.toString(styles.borderRadius)}</pre></div>

        <Tabs defaultActiveKey={1}>
          <Tab eventKey={1} title="快速配置" className='quick'>
            <div className='ratio'>
              <label>形状</label>
              <div className='types'>
                <Input type="radio" name="borderRadiusRadio" value={1} checked={ratio==1} onChange={this.onRatioSelected}
                       label={<span>1:1 <QuarterEllipse size='2' unit='em' ratio={1}/></span>} standalone readonly/>
                <Input type="radio" name="borderRadiusRadio" value={2}  checked={ratio==2} onChange={this.onRatioSelected}
                       label={<span>2:1 <QuarterEllipse size='2' unit='em' ratio={2}/></span>} standalone readonly/>
                <Input type="radio" name="borderRadiusRadio" value={0.5}  checked={ratio==0.5} onChange={this.onRatioSelected}
                       label={<span>1:2 <QuarterEllipse size='2' unit='em' ratio={0.5}/></span>} standalone readonly/>
              </div>
            </div>
            <div className='unit'>
              <label>单位</label>
              <div className='types'>
                <Input type="radio" name="borderRadiusUnit" value={'%'} checked={unit==='%'} onChange={this.onUnitSelected}
                       label={'% 百分比'} standalone readonly/>
                <Input type="radio" name="borderRadiusUnit" value={'px'}  checked={unit==='px'} onChange={this.onUnitSelected}
                       label={'px'} standalone readonly/>
              </div>
            </div>
            <div className='unit'>
              <label>数值</label>
              <Slider
                range={{min: 0, max: 100}}
                start={[value]}
                step={1}
                connect='lower'
                onChange={this.onValueSelected}
                />
            </div>
          </Tab>
          <Tab eventKey={2} title="高级">
            <div className='border-separated'>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

BorderRadius.displayName = 'BorderRadius';

export default BorderRadius;
