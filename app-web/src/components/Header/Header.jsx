import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
// COMPONENT
import Countdown from '../Countdown/Countdown'
// SERVICES
import headerApi from './api'
// STYLE
import './Header.css';

class Header extends Component {
	constructor() {
		super();

		this.state = {
			info: {},
			barWidth: '',
		}

		let self = this
		headerApi.getIcoInfo().then(function (data) {
			// console.log(data)
			self.setState({
				info: data
			})
			self.setState({
				barWidth: data.percent
			})
		})
	}

	logout = () => {
		this.props.history.push('./')
	}

	render() {
		const style = {
			wrapper: {
				color: '#fff',
				paddingBottom: '30px',
			},
			progressBar: {
				display: 'inline-block',
				position: 'relative !important',
				width: this.state.barWidth,
				height: '20px'
			},

		}

		return (
			<div>
				<div style={style.wrapper}>
					<Row style={style.wrapper.content} className='no-margin'>
						<Col mdOffset={3} md={6} smOffset={2} sm={8} xsOffset={1} xs={10}  >
							<p className='h-wrapper-header'>
								<FormattedMessage id='header.title' defaultMessage='PROGRESSIVE COIN SALES (VC)' />
							</p>
							<div className="h-wrapper-progress ">
								<div className='main-bg-color-light f-left' style={style.progressBar}>
									<div style={style.raiseAmount} className="raiseAmount main-bg-color-light">
										<p className='raise-number n-text'>{this.state.info.sold}</p>
									</div>
								</div>
							</div>
							<p className='h-wrapper-text'>
								<FormattedMessage id='header.bar' defaultMessage='PRE-ICO PROGRESSIVE COIN SALES (TOKENS)' />
							</p>
							<div className="h-countdown">
								<Countdown endDate={this.state.info.startDate} />
							</div>
							<p className='h-wrapper-text center'>
								<FormattedMessage id='header.timeleft' defaultMessage='TIME LEFT IN PUBLIC PRE-ICO' />
							</p>
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}

export default Header