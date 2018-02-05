import React, { Component } from 'react';
//libs
import {Alert} from 'react-bootstrap';
    
class AlertSimple extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    if (this.props.content.length > 0) {
      return (
        <Alert bsStyle={this.props.bsStyle} className="m-top">
          {this.props.content}
        </Alert>
      );
    }

    return null;
  }
}

export default AlertSimple;