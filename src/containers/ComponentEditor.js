require('../styles/ComponentEditor.styl');
import {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {editorPanel} from '../actions';
import Widgets from '../components/widgets/Widgets';
import {Background, Canvas, Panel} from '../components/component-editor';

class ComponentEditor extends Component {
  render() {
    return (
      <div className="container component-editor">
        <div className="row">
          <Widgets/>
        </div>
        <div className="row">
          <div className="col-xs-offset-1 col-xs-6">
            <Background><Canvas styles={this.props.editorPanel.styles}/></Background>
          </div>
          <div className="col-xs-offset-1 col-xs-4">
            <Panel editorPanel={this.props.editorPanel} actions={this.props.actions}/>
          </div>
        </div>
      </div>
    );
  }
}
ComponentEditor.propTypes = { actions: PropTypes.object.isRequired };
function mapStateToProps({actions, editorPanel}) {
  const props = {actions, editorPanel};
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = editorPanel;
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(ComponentEditor);
