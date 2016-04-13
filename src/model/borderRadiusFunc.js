import _ from 'lodash';
function toCssString({value, ratio, unit}, slash) {
  let x = value, y = value / borderRadiusFunc.convertRatioToDouble(ratio);
  if (unit === '%') {
    x = x + '%';
    y = y + '%';
  } else {
    x += unit;
    y += unit;
  }
  return x + (slash ? ' / ' : ' ') + y;
}

function getValueRatioUnit(borderRadius, side) {
  let result;
  let unit = borderRadius.unit;
  let ratio = borderRadius.ratio;
  let value = borderRadius.value;
  if (side) {
    let sideRatio = borderRadius[side + 'Ratio'];
    let sideValue = borderRadius[side + 'Value'];
    if (sideRatio == null && sideValue == null) // return undefined if this side has no definition
      return;
    if (value == sideValue && ratio == sideRatio) // return undefined if this side's no different than all
      return;
    if (sideRatio)
      ratio = sideRatio;
    if (sideValue)
      value = sideValue;
  }
  result = {};
  result[_.camelCase('border ' + (side ? side : '') + ' radius' )] = toCssString({value: value, ratio: ratio, unit: unit}, side == null);
  return result;
}

const borderRadiusFunc = {
  process(borderRadius) {
    return Object.assign({}, getValueRatioUnit(borderRadius)
      , getValueRatioUnit(borderRadius, 'topLeft')
      , getValueRatioUnit(borderRadius, 'topRight')
      , getValueRatioUnit(borderRadius, 'bottomRight')
      , getValueRatioUnit(borderRadius, 'bottomLeft'))
  },
  toString(borderRadius) {
    let x = borderRadius.value, y = borderRadius.value / this.convertRatioToDouble(borderRadius.ratio);
    if (borderRadius.unit === '%') {
      x = x + '%';
      y = y + '%';
    } else {
      x += borderRadius.unit;
      y += borderRadius.unit;
    }
    return x + ' / ' + y;
  },
  convertRatioToString(ratio) {
    if (ratio === 0)
      return '1:1';
    return ratio < 0 ? '1:' + (-ratio + 1): (ratio + 1) + ':1';
  },
  convertRatioToDouble(ratio) {
    if (ratio === 0)
      return 1;
    return ratio > 0 ? (ratio + 1) : 1/ (-(ratio) + 1);
  }
}


export default borderRadiusFunc;

