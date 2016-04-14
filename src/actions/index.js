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
  setBorder(value, prop, side){
    let styles = {border:{top: {}, right: {}, bottom: {}, left: {}}}
    if (side) {
      styles.border[side][prop] = value;
    } else {
      styles.border[prop] = value;
      styles.border.top[prop] = null;
      styles.border.right[prop] = null;
      styles.border.bottom[prop] = null;
      styles.border.left[prop] = null;
    }
    return setStyles(styles);
  },
  setBorderRadius(value, prop, side){
    let styles = {borderRadius:{topLeft:{}, topRight:{}, bottomRight:{}, bottomLeft:{}}}
    if (side) {
      styles.borderRadius[side][prop] = value;
    } else {
      styles.borderRadius[prop] = value;
      styles.borderRadius.topLeft[prop] = null;
      styles.borderRadius.topRight[prop] = null;
      styles.borderRadius.bottomRight[prop] = null;
      styles.borderRadius.bottomLeft[prop] = null;
    }
    if (prop === 'unit' && value === '%') {
      //if (borderRadius.value)
    }
    return setStyles(styles);
  }
}
