import DefaultEditorPanel from '../constants/DefaultEditorPanel';
import {editorPanel} from '../actions';

const initialState = Object.assign({}, DefaultEditorPanel);

module.exports = (state = initialState, action = {type:null}) => {
  switch (action.type) {
    case editorPanel.SET_STYLES:
      let newStyles = Object.assign({}, state.styles, action.styles);
      return Object.assign({}, state, {styles: newStyles});
    case editorPanel.SET_PANEL_STATUS:
      let newPanelStatus = Object.assign({}, state.panelStatus, action.panelStatus);
      return Object.assign({}, state, {panelStatus: newPanelStatus});
    default:
      return state
  }
};
