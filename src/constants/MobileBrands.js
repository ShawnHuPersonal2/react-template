'use strict';
import _ from 'lodash';

const all = Object.freeze([
  {
    brand: 'iphone',
    versions: [
      {name: 'iphone < 4', width: 320, height: 480},
      {name: 'iphone 5,5s', width: 320, height: 568},
      {name: 'iphone 6', width: 375, height: 667},
      {name: 'iphone 6s', width: 414, height: 736}
    ]
  }
]);
export function findByName(name){
  let result = null;
  all.map((brand)=>{
    brand.versions.map((version)=>{
      if (version.name === name)
        result = version;
    })
  })
  return result;
};
export const DefaultSize = {width: 360, height: 640};
export default all;
