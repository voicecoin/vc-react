import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

class Countdown extends Component {
    constructor(props){
        super(props);

        this.state = {
            days: '0',
            hours: '0',
            minutes: '0',
            seconds: '0',
            timeinterval: ''
        }
    }

    componentDidMount(){
        
    }

    componentWillReceiveProps(nextProps){
        if(this.props.endDate !== nextProps.endDate){
            this.updateClock(nextProps.endDate);
            this.state.timeinterval = setInterval(this.updateClock.bind(this, nextProps.endDate), 1000)
        }
    }

    /****** app func ******/
    /****** app func ******/
    /****** app func ******/
    updateClock = (endtime) => {
        let temp = Date.parse(endtime) - Date.parse(new Date())

        let t = getTimeRemaining(temp);
    
        this.setState({ days: t.days });
        this.setState({ hours: t.hours });
        this.setState({ minutes: t.minutes });
        this.setState({ seconds: t.seconds });
    
        if (t.total <= 0) {
          clearInterval(this.state.timeinterval);
        }

        function getTimeRemaining(t){
            var seconds = Math.floor( (t/1000) % 60 );
            var minutes = Math.floor( (t/1000/60) % 60 );
            var hours = Math.floor( (t/(1000*60*60)) % 24 );
            var days = Math.floor( t/(1000*60*60*24) );
    
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }
    }


    render() {
        const style = {
            block: {
                display: 'inline-block',
                height: '90px',
                width: '105px',
                backgroundColor: '#3398dcb3',
                border: '1px solid #ffffff33',
                marginBottom: '10px',
                marginRight: '20px',
                borderRadius: '1px'
            },
            number: {
                fontSize: '38px',
                padding:'5px 0px',
                fontWeight: 600
            },
            text: {
                fontSize: '11px',
                fontWeight: '300'
            }
        }

        return (
            <div>
                <Row>
                    <Col md={12} mdOffset={0} xsOffset={1} xs={10}>
                        <div style={style.block}>
                            <div style={style.number}>{this.state.days}</div>
                            <div style={style.text}>DAYS</div>
                        </div>

                        <div style={style.block}>
                            <div style={style.number}>{this.state.hours}</div>
                            <div style={style.text}>HOURS</div>
                        </div>

                        <div style={style.block}>
                            <div style={style.number}>{this.state.minutes}</div>
                            <div style={style.text}>MINUTES</div>
                        </div>

                        <div style={style.block}>
                            <div style={style.number}>{this.state.seconds}</div>
                            <div style={style.text}>SECONDS</div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Countdown