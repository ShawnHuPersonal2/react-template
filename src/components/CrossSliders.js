import {Component} from 'react';
import Slider from './Slider';
class CrossSlider extends Component {
  render() {
    let verticalProps = Object.assign({}, this.props.vertical, {orientation: 'vertical',style:{height:'100%'}});
    let horizontalProps = Object.assign({}, this.props.horizontal, {orientation: 'horizontal'});
    return <div style={{position:'relative',paddingTop:'100%'}}>
        <div style={{position:'absolute',height:'100%',top:0,left:0}}>
          <Slider {...verticalProps}/>
        </div>
        <Slider {...horizontalProps}/>
    </div>;
  }
}
export default CrossSlider;
