import {
  Component,
  PropTypes
} from 'react';
import {findDOMNode} from 'react-dom';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import MobileBrands from '../../constants/MobileBrands';
import _ from 'lodash';
function convertToMenu(brand, selected, setPhone) {
  let result = [];
  result.push(<MenuItem key={brand.brand} header>{brand.brand}</MenuItem>);
  brand.versions.map((version)=>{
    let active = selected === version.name;
    result.push(
      <MenuItem key={version.name} onClick={()=>{setPhone(version)}} active={active}>
        <span style={{width:'10em',display:'inline-block'}}>{version.name}</span>
        <span style={{width:'5em',display:'inline-block'}}>{version.width + '×' + version.height}</span>
      </MenuItem>
    )
  });
  return result;
}
class ScreenParameters extends Component {
  constructor(props) {
    super(props);
    this.state = {phone: props.phone};
  }
  componentWillReceiveProps({phone}) {
    this.setState({phone: phone})
  }
  onSizeChange = () => {
    let width = findDOMNode(this.refs.width).value;
    let height = findDOMNode(this.refs.height).value;
    this.props.actions.setPhone({name:'自定义', width: width, height: height});
  };
  render() {
    let {actions} = this.props;
    let {phone} = this.state;
    let entries = [];
    MobileBrands.map((brand)=> {
      entries = _.concat(entries, convertToMenu(brand, phone.name, actions.setPhone))
    })
    return (
      <div className='screen-parameters'>
        <div>
          <DropdownButton bsStyle={'default'} title={phone.name ? phone.name : '手机型号'} id='phone-brand-selector'>
            {entries}
          </DropdownButton>
        </div>
        <div className='input'>
          <div className='input-group'>
                  <span className='input-group-btn'>
                    <button className='btn btn-default' type='button'>宽度</button>
                  </span>
            <input ref='width' type='text' className='form-control' value={phone.width} placeholder='宽度' onChange={this.onSizeChange}/>
          </div>
        </div>
        <div className='input'>
          <div className='input-group'>
                  <span className='input-group-btn'>
                    <button className='btn btn-default' type='button'>长度</button>
                  </span>
            <input ref='height' type='text' className='form-control' value={phone.height} placeholder='长度' onChange={this.onSizeChange}/>
          </div>
        </div>
      </div>
    );
  }
}
ScreenParameters.propTypes = { actions: PropTypes.object.isRequired, phone: PropTypes.object.isRequired  };
export default ScreenParameters;
