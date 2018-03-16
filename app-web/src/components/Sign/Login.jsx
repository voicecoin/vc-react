import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import {
	Grid,
	Row,
	Col,
	form,
	FormGroup,
	FormControl,
	InputGroup,
	Glyphicon,
	Modal,
	Button,
	HelpBlock
} from 'react-bootstrap';

import { AlertList, Alert, AlertContainer } from "react-bs-notifier";

// SERVICES
import signApi from './services/api'
// STYLE
import './Sign.css';

class Login extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
			emailValidationMessage: '',
			password: '',
			passwordValidationMessage: '',
			activationMessage: ''
		}
	}

	componentDidMount() {
		let self = this;

		if (this.props.activationCode) {
			signApi.activate(this.props.activationCode)
				.then(function (data) {
					self.setState({ activationMessage: data });
				})
		}
	}

	emailValidationState() {
		if (this.state.email === '') return null
		return signApi.validateEmail(this.state.email) ? 'success' : 'error';
	}

	passwordValidation() {
		if (this.state.password.length == 0) return null;
		return this.state.password.length > 5 ? 'success' : 'error';
	}

	onEmailChange(e) {
		this.setState({ email: e.target.value, emailValidationMessage: '', passwordValidationMessage: '' })
	}

	onPasswordChange(e) {
		this.setState({ password: e.target.value, emailValidationMessage: '', passwordValidationMessage: '' })
	}


	render() {
		const style = {
			log: {
				opacity: '0.95',
				height: '480px',
				padding: '3rem',
				backgroundColor: 'white',
				borderRadius: '5px 0px 0px 5px',
				header: {
					fontSize: '25px',
					fontWeight: 600,
					margin: '0px 0px 20px 0px',
					textAlign: 'left',
					color: '#686868'
				},
				helpBlock: {
					color: 'yellow'
				}
			},
		}

		return (
			<Row style={style.log}>
				<div style={style.log.header}>
					<FormattedMessage id='login.login.title' defaultMessage='Login' />
				</div>

				<FormGroup>
					<InputGroup bsSize="large">
						<InputGroup.Addon className='input-addon'>
							<i className="fa fa-envelope ft-icon"></i>
						</InputGroup.Addon>
						<FormControl
							type="email"
							className='input-basic'
							placeholder='Email Address'
							value={this.state.email}
							onChange={(e) => this.onEmailChange(e)} />
					</InputGroup>
					<HelpBlock>{this.state.emailValidationMessage}</HelpBlock>
				</FormGroup>

				<FormGroup>
					<InputGroup bsSize="large">
						<InputGroup.Addon className='input-addon'>
							<i className="fa fa-key ft-icon"></i>
						</InputGroup.Addon>
						<FormControl
							type="password"
							className='input-basic'
							placeholder='Password'
							value={this.state.password}
							onChange={(e) => this.onPasswordChange(e)} />
					</InputGroup>
					<HelpBlock style={style.log.helpBlock}>{this.state.passwordValidationMessage}</HelpBlock>
				</FormGroup>

				<div
					style={style.log.btn}
					className='sign-btn'
					onClick={() => this.props.login(this.state.email, this.state.password)}>
					<FormattedMessage id='login.login' defaultMessage='LOGIN' />
				</div>

				{
					this.state.activationMessage.length > 0 ? (
						<AlertContainer>
							<Alert type="info" timeout="10">{this.state.activationMessage}</Alert>
						</AlertContainer>
					) : ''
				}
			</Row>
		);
	}
}

export default Login;