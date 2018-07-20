import React, { Component } from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

class Countdown extends Component {
	constructor(props) {
		super(props);

		this.state = {
			days: '0',
			hours: '0',
			minutes: '0',
			seconds: '0',
			timeinterval: ''
		}
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.endDate !== nextProps.endDate) {
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

		function getTimeRemaining(t) {
			var seconds = Math.floor((t / 1000) % 60).toString();
			var minutes = Math.floor((t / 1000 / 60) % 60).toString();
			var hours = Math.floor((t / (1000 * 60 * 60)) % 24).toString();
			var days = Math.floor(t / (1000 * 60 * 60 * 24)).toString();
			if (seconds.length == 1) seconds = '0' + seconds;
			if (minutes.length == 1) minutes = '0' + minutes;
			if (hours.length == 1) hours = '0' + hours;
			if (days.length == 1) days = '0' + days;

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
				backgroundColor: '#9b69e4',
				border: '1px solid #ffffff33',
				marginBottom: '10px',
				marginRight: '20px',
				borderRadius: '1px'
			},
			number: {
				fontSize: '38px',
				padding: '5px 0px',
				fontWeight: 600
			},
			text: {
				fontSize: '11px',
				fontWeight: '300'
			}
		}

		return (
			<Row>
				<Col style={style.block}>
					<div style={style.number}>{this.state.days}</div>
					<div style={style.text}>
						<FormattedMessage id='countdown.day' defaultMessage='DAYS' />
					</div>
				</Col>

				<Col style={style.block}>
					<div style={style.number}>{this.state.hours}</div>
					<div style={style.text}>
						<FormattedMessage id='countdown.hour' defaultMessage='HOURS' />
					</div>
				</Col>

				<Clearfix visibleXsBlock />

				<Col style={style.block}>
					<div style={style.number}>{this.state.minutes}</div>
					<div style={style.text}>
						<FormattedMessage id='countdown.minute' defaultMessage='MINUTES' />
					</div>
				</Col>

				<Col style={style.block}>
					<div style={style.number}>{this.state.seconds}</div>
					<div style={style.text}>
						<FormattedMessage id='countdown.second' defaultMessage='SECONDS' />
					</div>
				</Col>
			</Row>
		)
	}
}

export default Countdown