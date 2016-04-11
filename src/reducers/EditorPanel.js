import DefaultEditorPanel from '../constants/DefaultEditorPanel';
import {editorPanel} from '../actions';

const initialState = Object.assign({}, DefaultEditorPanel);

module.exports = (state = initialState, action = {type:null}) => {
  let result;
  switch (action.type) {
    case editorPanel.SET_STYLES:
      let newStyles = Object.assign({}, state.styles, action.styles);
      result = Object.assign({}, state, {styles: newStyles});
      for (var key in result.styles) { //remove empty styles. there seems to be a bug with changing styles
        if (result.styles[key] == null)
          delete result.styles[key];
      }
      break;
    case editorPanel.SET_PANEL_STATUS:
      let newPanelStatus = Object.assign({}, state.panelStatus, action.panelStatus);
      result = Object.assign({}, state, {panelStatus: newPanelStatus});
      break;
    default:
      result = state
  }
  return result;
};
