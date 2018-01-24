import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
//services
import signApi from './services/api'
//style
import './Sign.css';

class Sign extends Component {

  render() {
    const style = {
      wrapper: {
        color: '#fff'
      },
      log: {
        height: '300px',
        backgroundColor: '#3b96d5',

      },
      sign: {
        height: '300px',

      }

    }

    return (
      <div style={style.wrapper}>
        <Col mdOffset={2} md={4} style={style.log}>
          <h1>log</h1>
        </Col>
        <Col md={4}>
          <h1>sign</h1>
        </Col>
        
      </div>
    );
  }
}

export default Sign;