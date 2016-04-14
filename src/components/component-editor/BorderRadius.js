'use strict';
import _ from 'lodash';
import React from 'react';
import {Tabs, Tab, Input} from 'react-bootstrap';
import Slider from '../Slider';
import QuarterEllipse from '../QuarterEllipse';
import {borderRadiusFunc, jssFunc} from 'model';

class BorderRadiusSettings extends React.Component {
  constructor(props) {
    super(props);
    this.onRatioSelected = this.onRatioSelected.bind(this);
    this.onValueSelected = this.onValueSelected.bind(this);
  }
  onRatioSelected(values) {
    this.props.actions.setBorderRadius(parseInt(values[0]), 'ratio', this.props.side);
  }
  onValueSelected(values) {
    this.props.actions.setBorderRadius(parseInt(values[0]),'value', this.props.side);
  }
  render() {
    let borderRadius = this.props.editorPanel.styles.borderRadius;
    let side = this.props.side;
    let {ratio, unit, value} = _.merge({}, borderRadius, borderRadius[side]);
    return (
      <div className={'border-radius-settings' + side}>
        <div className='ratio'>
          <label>x:y <span ref="borderRadiusRatio"></span></label>
          <Slider
            range={{min: -9, max: 9}}
            start={[ratio]}
            step={1}
            connect='lower'
            onUpdate={(values)=>this.refs.borderRadiusRatio.innerHTML=borderRadiusFunc.convertRatioToString(parseInt(values[0]))}
            onChange={this.onRatioSelected}
            />
        </div>
        <div className='value'>
          <label>x半径 <span ref="borderRadiusValue"></span></label>
          <Slider
            range={unit=='%' ? {min: 0, max: 50} : {min: 0, max: 240}}
            start={[value]}
            step={1}
            connect='lower'
            onUpdate={(values)=>this.refs.borderRadiusValue.innerHTML=parseInt(values[0]) + unit}
            onChange={this.onValueSelected}
            />
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
    let css = borderRadiusFunc.process(styles.borderRadius);
    return (
      <div className='border-radius'>
        <div><pre>{jssFunc.toPlainCss(css)}</pre></div>

        <div className='unit'>
          <label>单位</label>
          <div className='types'>
            <Input type="radio" name="borderRadiusUnit" value={'%'} checked={unit==='%'} onChange={this.onUnitSelected}
                   label={'% 百分比'} standalone readonly/>
            <Input type="radio" name="borderRadiusUnit" value={'px'}  checked={unit==='px'} onChange={this.onUnitSelected}
                   label={'px'} standalone readonly/>
          </div>
        </div>
        <Tabs defaultActiveKey={1}>
          <Tab eventKey={1} title="快速配置" className='quick'>
            <div className='ratio'>
              <label>形状</label>
              <div className='types'>
                <Input type="radio" name="borderRadiusRadio" value={0} checked={ratio==0} onChange={this.onRatioSelected}
                       label={<span>1:1 <QuarterEllipse size='2' unit='em' ratio={1}/></span>} standalone readonly/>
                <Input type="radio" name="borderRadiusRadio" value={1}  checked={ratio==1} onChange={this.onRatioSelected}
                       label={<span>2:1 <QuarterEllipse size='2' unit='em' ratio={2}/></span>} standalone readonly/>
                <Input type="radio" name="borderRadiusRadio" value={-1}  checked={ratio==-1} onChange={this.onRatioSelected}
                       label={<span>1:2 <QuarterEllipse size='2' unit='em' ratio={0.5}/></span>} standalone readonly/>
              </div>
            </div>
            <div className='value'>
              <label>x半径 <span ref="borderRadiusValue"></span></label>
              <Slider
                range={unit=='%' ? {min: 0, max: 50} : {min: 0, max: 240}}
                start={[value]}
                step={1}
                connect='lower'
                onChange={this.onValueSelected}
                onUpdate={(values)=>this.refs.borderRadiusValue.innerHTML=parseInt(values[0]) + unit}
                />
            </div>
          </Tab>
          <Tab eventKey={2} title="高级" className='advanced'>
            <div className='border-radius-separated'>
              <div>
                <label>左上角</label>
                <BorderRadiusSettings side='topLeft' {...this.props}/>
              </div>
              <div>
                <label>右上角</label>
                <BorderRadiusSettings side='topRight' {...this.props}/>
              </div>
              <div>
                <label>右下角</label>
                <BorderRadiusSettings side='bottomRight' {...this.props}/>
              </div>
              <div>
                <label>左下角</label>
                <BorderRadiusSettings side='bottomLeft' {...this.props}/>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

BorderRadius.displayName = 'BorderRadius';

export default BorderRadius;
