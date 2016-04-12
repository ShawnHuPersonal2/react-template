import _ from 'lodash';
import DefaultEditorPanel from '../constants/DefaultEditorPanel';
import {editorPanel} from '../actions';

const defaultEditorPanel = Object.assign({}, DefaultEditorPanel);

module.exports = (statePiece = defaultEditorPanel, action = {type:null}) => {
  let result;
  switch (action.type) {
    case editorPanel.SET_STYLES: {
      let newStyles = _.merge({}, statePiece.styles, action.styles);
      result = Object.assign({}, statePiece, {styles: newStyles});
      for (let key in result.styles) { //remove empty styles. there seems to be a bug with changing styles
        if (result.styles[key] == null)
          delete result.styles[key];
      }
      break;
    }
    case editorPanel.SET_PANEL_STATUS: {
      let newPanelStatus = Object.assign({}, statePiece.panelStatus, action.panelStatus);
      result = Object.assign({}, statePiece, {panelStatus: newPanelStatus});
      break;
    }
    default: {
      result = statePiece
    }
  }
  return result;
};
