import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {setPhone} from '../actions';
class ComponentContainer extends Component {
  render() {
    return (
      <div className="container" style={{background:'#abc',height:200}}>111
      </div>
    );
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
ComponentContainer.propTypes = { actions: PropTypes.object.isRequired };
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
export default connect(mapStateToProps, mapDispatchToProps)(ComponentContainer);
