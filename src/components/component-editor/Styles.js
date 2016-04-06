'use strict';
import React from 'react';
import {Input, ListGroup, ListGroupItem} from 'react-bootstrap';
import BorderRadius from './BorderRadius'

class Styles extends React.Component {
  render() {
    return (
      <div className='editor-styles'>
        <ListGroup>
          <ListGroupItem className="">
            <BorderRadius/>
          </ListGroupItem>
          <ListGroupItem>Item 2</ListGroupItem>
          <ListGroupItem>...</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

Styles.displayName = 'Canvas';

export default Styles;
