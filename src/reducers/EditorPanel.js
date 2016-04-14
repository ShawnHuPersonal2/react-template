import _ from 'lodash';
import DefaultEditorPanel from '../constants/DefaultEditorPanel';
import {editorPanel} from '../actions';

const defaultEditorPanel = Object.assign({}, DefaultEditorPanel);

function pruneEmpty(obj) {
  return function prune(current) {
    _.forOwn(current, function (value, key) {
      if (_.isUndefined(value) || _.isNull(value) || _.isNaN(value) ||
        (_.isString(value) && _.isEmpty(value)) ||
        (_.isObject(value) && _.isEmpty(prune(value)))) {

        delete current[key];
      }
    });
    // remove any leftover undefined values from the delete
    // operation on an array
    if (_.isArray(current)) _.pull(current, undefined);

    return current;

  }(_.cloneDeep(obj));  // Do not modify the original object, create a clone instead
}

module.exports = (statePiece = defaultEditorPanel, action = {type:null}) => {
  let result;
  switch (action.type) {
    case editorPanel.SET_STYLES: {
      result = pruneEmpty(_.merge({}, statePiece, {styles: action.styles}));
      break;
    }
    case editorPanel.SET_PANEL_STATUS: {
      result = pruneEmpty(Object.assign({}, statePiece, {panelStatus: action.panelStatus}));
      break;
    }
    default: {
      result = statePiece
    }
  }
  return result;
};
