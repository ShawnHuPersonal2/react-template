import {
  Component
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {Badge, Label} from './Bootstrap'

require('../../styles/Widgets.styl');

class Widgets extends Component {
  render() {
    return (
      <ListGroup className="widgets">
        <ListGroupItem header="Bootstrap">
          <span><Badge/></span><span><Label bsStyle="primary"/></span>
        </ListGroupItem>
        <ListGroupItem>Item 2</ListGroupItem>
        <ListGroupItem>...</ListGroupItem>
      </ListGroup>
    );
  }
}
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = state;
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(Widgets);
