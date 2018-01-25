import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

class Countdown extends Component {

    render(){
        const style = {
            block: {
                display: 'inline-block',
                height: '110px',
                width: '120px',
                backgroundColor: '#3398dcb3',
                border: '1px solid #ffffff33',
                marginBottom: '10px',
                marginRight: '20px'
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
                    <Col mdOffset={2} md={8} xsOffset={1} xs={10}>
                        <div style={style.block}>
                            <div style={style.number}>36</div>
                            <div style={style.text}>DAYS</div>
                        </div>

                        <div style={style.block}>
                            <div style={style.number}>36</div>
                            <div style={style.text}>HOURS</div>
                        </div>

                        <div style={style.block}>
                            <div style={style.number}>36</div>
                            <div style={style.text}>HOURS</div>
                        </div>

                        <div style={style.block}>
                            <div style={style.number}>36</div>
                            <div style={style.text}>HOURS</div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Countdown