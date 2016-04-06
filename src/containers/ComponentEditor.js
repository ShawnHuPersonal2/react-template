require('../styles/ComponentEditor.styl');
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {setPhone} from '../actions';
import Widgets from '../components/widgets/Widgets';
import {Background, Canvas, Styles} from '../components/component-editor';

class ComponentEditor extends Component {
  render() {
    return (
      <div className="container component-editor">
        <div className="row">
          <Widgets/>
        </div>
        <div className="row">
          <div className="col-xs-8">
            <Background><Canvas/></Background>
          </div>
          <div className="col-xs-4">
            <Styles/>
          </div>
        </div>
      </div>
    );
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
ComponentEditor.propTypes = { actions: PropTypes.object.isRequired };
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = state;
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {setPhone};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(ComponentEditor);
