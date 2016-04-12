'use strict';
const defaultEditorPanel = Object.freeze(
  {
    panelStatus: {
      borderExpanded: false
    },
    styles: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'black',
      padding: '25%',
      height: '100%',
      position: 'relative',
      borderRadius: {
        ratio: 1,
        unit: 'px',
        value: 10
      }
    }
  }
);
export default defaultEditorPanel;
