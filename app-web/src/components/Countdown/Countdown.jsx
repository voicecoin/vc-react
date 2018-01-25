import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

class Countdown extends Component {

    render(){
        const style = {
            block: {
                height: '110px',
                width: '120px',
                backgroundColor: '#3398dcb3',
                border: '1px solid #ffffff33',
                marginBottom: '10px'
            },
            number: {
                fontSize: '42px',
                padding:'10px 0px'
            },
            text: {
                fontSize: '11px',
                fontWeight: '300'
            }
        }

        return (
            <div>
                <Row>
                    <Col md={2} mdOffset={2} xsOffset={1} xs={3}>
                        <div style={style.block}>
                            <div style={style.number}>36</div>
                            <div style={style.text}>DAYS</div>
                        </div>
                    </Col>

                    <Col md={2} xsOffset={0} xs={3}>
                        <div style={style.block}>
                            <div style={style.number}>36</div>
                            <div style={style.text}>HOURS</div>
                        </div>
                    </Col>

                    <Col md={2} xsOffset={0} xs={3}>
                        <div style={style.block}>
                            <div style={style.number}>36</div>
                            <div style={style.text}>MINUTES</div>
                        </div>
                    </Col>

                    <Col md={2} mdOffset={0} xsOffset={4} xs={3}>
                        <div style={style.block}>
                            <div style={style.number}>36</div>
                            <div style={style.text}>SECONDS</div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Countdown