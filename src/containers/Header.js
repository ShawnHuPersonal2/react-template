import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderComponent from '../components/HeaderComponent.js';
/* Populated by react-webpack-redux:reducer */
class Header extends Component {
  render() {
    return <HeaderComponent menu={this.props.menu}/>;
  }
}
Header.propTypes = {
  menu: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  const props = Object.assign({}, {menu: state.menu})
  return props;
}
function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
