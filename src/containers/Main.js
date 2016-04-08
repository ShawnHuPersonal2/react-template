import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {setEditorPanel} from '../actions';
import Main from '../components/Main';
import { push } from 'react-router-redux'
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {actions, phone} = this.props;
    return (
        <Main actions={actions} phone={phone}/>
    );
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = { actions: PropTypes.object.isRequired };
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = state;
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {setEditorPanel, push};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
