export const SET_PHONE = 'SET_PHONE';

export function setPhone(phone) {
  return {type: SET_PHONE, phone: phone};
}




const SET_PANEL_STATUS = 'SET_PANEL_STATUS';
const SET_STYLES = 'SET_STYLES';

function setPanelStatus(panelStatus) {
  return {type: SET_PANEL_STATUS, panelStatus: panelStatus};
}
function setStyles(styles) {
  return {type: SET_STYLES, styles: styles};
}

export const editorPanel = {
  SET_PANEL_STATUS,
  SET_STYLES,
  setPanelStatus,
  setStyles,
  toggleBorderPanel: (borderExpanded) => {
    return setPanelStatus({borderExpanded: borderExpanded});
  },
  setBorderWidth: (width) => {
    return setStyles({borderWidth: width});
  }
}
