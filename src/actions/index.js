var _tinycolor = require('tinycolor2');

export const SET_PHONE = 'SET_PHONE';

export function setPhone(phone) {
  return {type: SET_PHONE, phone: phone};
}



const SET_PANEL_STATUS = 'SET_PANEL_STATUS';
const SET_STYLES = 'SET_STYLES';

function setPanelStatus(panelStatus) {
  return {type: SET_PANEL_STATUS, panelStatus:
    Object.assign({borderExpanded:false,borderRadiusExpanded:false}, panelStatus)};
}
function setStyles(styles) {
  return {type: SET_STYLES, styles: styles};
}

export const editorPanel = {
  SET_PANEL_STATUS,
  SET_STYLES,
  setPanelStatus,
  setStyles,
  toggleBorderPanel(borderExpanded){
    return setPanelStatus({borderExpanded: borderExpanded});
  },
  toggleBorderRadiusPanel(borderRadiusExpanded){
    return setPanelStatus({borderRadiusExpanded: borderRadiusExpanded});
  },
  setBorderWidth(width, side){
    switch(side) {
      case 'top':
        return setStyles({borderTopWidth: width});
      case 'right':
        return setStyles({borderRightWidth: width});
      case 'bottom':
        return setStyles({borderBottomWidth: width});
      case 'left':
        return setStyles({borderLeftWidth: width});
      default:
        return setStyles({
          borderWidth: width,
          borderTopWidth: null,
          borderRightWidth: null,
          borderBottomWidth: null,
          borderLeftWidth: null
        });
    }
  },
  setBorderStyle(style, side){
    switch(side) {
      case 'top':
        return setStyles({borderTopStyle: style});
      case 'right':
        return setStyles({borderRightStyle: style});
      case 'bottom':
        return setStyles({borderBottomStyle: style});
      case 'left':
        return setStyles({borderLeftStyle: style});
      default:
        return setStyles({
          borderStyle: style,
          borderTopStyle: null,
          borderRightStyle: null,
          borderBottomStyle: null,
          borderLeftStyle: null
        });
    }
  },
  setBorderColor(rgb, side){
    let color = _tinycolor(rgb).toRgbString();
    switch(side) {
      case 'top':
        return setStyles({borderTopColor: color});
      case 'right':
        return setStyles({borderRightColor: color});
      case 'bottom':
        return setStyles({borderBottomColor: color});
      case 'left':
        return setStyles({borderLeftColor: color});
      default:
        return setStyles({
          borderColor: color,
          borderTopColor: null,
          borderRightColor: null,
          borderBottomColor: null,
          borderLeftColor: null
        });
    }
  },
  setBorderRadiusRatio(ratio, side){
    switch(side) {
      case 'topLeft':
        return setStyles({borderRadius: {topLeftRatio: ratio}});
      case 'topRight':
        return setStyles({borderRadius: {topRightRatio: ratio}});
      case 'bottomRight':
        return setStyles({borderRadius: {bottomRightRatio: ratio}});
      case 'bottomLeft':
        return setStyles({borderRadius: {bottomLeftRatio: ratio}});
      default:
        return setStyles({
          borderRadius: {
            ratio: ratio,
            topLeftRatio: null,
            topRightRatio: null,
            bottomRightRatio: null,
            bottomLeftRatio: null
          }
        });
    }
  },
  setBorderRadiusUnit(unit) {
    return setStyles({
      borderRadius: {
        unit: unit
      }
    });
  },
  setBorderRadiusValue(value, side) {
    switch(side) {
      case 'topLeft':
        return setStyles({borderRadius: {topLeftValue: value}});
      case 'topRight':
        return setStyles({borderRadius: {topRightValue: value}});
      case 'bottomRight':
        return setStyles({borderRadius: {bottomRightValue: value}});
      case 'bottomLeft':
        return setStyles({borderRadius: {bottomLeftValue: value}});
      default:
        return setStyles({
          borderRadius: {
            value: value,
            topLeftValue: null,
            topRightValue: null,
            bottomRightValue: null,
            bottomLeftValue: null
          }
        });
    }
  }
}
