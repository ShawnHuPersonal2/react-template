'use strict';
import React from 'react';
import {Input} from 'react-bootstrap';

class BorderRadius extends React.Component {
  render() {
    return (
      <div className="border-radius">
        <Input type="radio" name="border-radius-type" label="像素" standalone groupClassName="radio-wrapper"/>
        <Input type="radio" name="border-radius-type" label="百分比" standalone groupClassName="radio-wrapper"/>
      </div>
    );
  }
}

BorderRadius.displayName = 'BorderRadius';

export default BorderRadius;
