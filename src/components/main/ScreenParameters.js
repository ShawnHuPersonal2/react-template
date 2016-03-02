import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import MobileBrands from '../../constants/MobileBrands';
import _ from 'lodash';
function convertToMenu(brand, setPhone) {
  let result = [];
  result.push(<MenuItem key={brand.brand} header>{brand.brand}</MenuItem>);
  brand.versions.map((version)=>result.push(
    <MenuItem key={version.name} onClick={()=>{setPhone(version)}}>
      <span style={{width:'10em',display:'inline-block'}}>{version.name}</span>
      <span style={{width:'5em',display:'inline-block'}}>{version.width + '×' + version.height}</span>
    </MenuItem>
  ));
  return result;
}

export default function ({phone, actions}) {
  let entries = [];
  MobileBrands.map((brand)=> {
    entries = _.concat(entries, convertToMenu(brand, actions.setPhone))
  })
  return (
    <div className='screen-parameters row'>
      <div>
        <DropdownButton bsStyle={'default'} title={phone.brand ? phone.brand : '手机型号'} id="phone-brand-selector">
          {entries}
        </DropdownButton>
      </div>
      <div className='input'>
        <div className="input-group">
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">宽度</button>
                  </span>
          <input type="text" className="form-control" value={phone.width} placeholder="Search for..."/>
        </div>
      </div>
      <div className='input'>
        <div className="input-group">
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">长度</button>
                  </span>
          <input type="text" className="form-control" value={phone.height} placeholder="Search for..."/>
        </div>
      </div>
    </div>
  )
}
