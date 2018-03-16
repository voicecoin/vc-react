import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { AlertList, Alert, AlertContainer } from "react-bs-notifier";
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
	Checkbox,
	HelpBlock
} from 'react-bootstrap';
import signApi from './services/api'
import './Sign.css';

class Register extends Component {
	constructor() {
		super();

		this.state = {
			fullName: '',
			fullNameValidationMessage: '',
			email: '',
			emailValidationMessage: '',
			password: '',
			passwordValidationMessage: '',
			isEmailExisted: false,
			signupMessage: '',
			checkedAccreditedInvestor: false,
			checkedWhitePaper: false,
			checkedSaft: false
		}
	}

	componentDidMount() {
		let self = this;
	}

	// FUNC() VALID CHECK
	fullNameValidationState() {
		if (this.state.fullName.length == 0) return null;
		return this.state.fullName.length > 2 ? 'success' : 'error';
	}

	emailValidationState() {
		if (this.state.email === '') return null
		return signApi.validateEmail(this.state.email) ? 'success' : 'error';
	}

	passwordValidation() {
		if (this.state.password.length == 0) return null;
		return this.state.password.length > 5 ? 'success' : 'error';
	}

	// FUNC() ON CHANGE
	onFullNameChange(e) {
		let self = this;
		self.setState({ fullName: e.target.value })
		if (self.state.fullName.length < 3) {
			self.setState({})
		}
	}

	onEmailChange(e) {
		this.setState({ email: e.target.value })
	}

	onPasswordChange(e) {
		this.setState({ password: e.target.value })
	}

	onTermChecked(e, name) {
		// clear error
		this.setState({ [name]: !this.state[name], [name + 'Validation']: null })
	}

	signup = () => {
		let self = this;

		// check data
		if (self.state.fullName.length < 3 ||
			self.state.email.length < 5 ||
			self.state.password.length < 6) return;

		if (!self.state.checkedAccreditedInvestor) self.setState({ checkedAccreditedInvestorValidation: 'error' })
		if (!self.state.checkedWhitePaper) self.setState({ checkedWhitePaperValidation: 'error' })
		if (!self.state.checkedSaft) self.setState({ checkedSaftValidation: 'error' })

		if (!self.state.checkedAccreditedInvestor ||
			!self.state.checkedWhitePaper ||
			!self.state.checkedSaft) return;

		let signupData = {
			fullName: self.state.fullName,
			email: self.state.email,
			password: self.state.password
		}

		signApi.sign(signupData).then(function (data) {
			self.setState({ signupMessage: data })
		}, function (response) {
			self.setState({ signupMessage: response.data })
		})
	}

	render() {
		var style = {
			sign: {
				backgroundColor: '#fff',
				height: '480px',
				padding: '3rem',
				borderRadius: '0px 5px 5px 0px',
				header: {
					color: '#686868',
					fontSize: '25px',
					fontWeight: 600,
					margin: '0px 0px 20px 0px',
					textAlign: 'left'
				},
				term: {
					color: '#605079'
				}
			}
		}

		return (
			<Row style={style.sign}>
				<div style={style.sign.header}>
					<FormattedMessage id='register.register.title' defaultMessage='Register' />
				</div>

				<FormGroup validationState={this.fullNameValidationState()}>
					<InputGroup bsSize="large">
						<InputGroup.Addon className='input-addon grey'>
							<i className="fa fa-pencil ft-icon"></i>
						</InputGroup.Addon>
						<FormControl
							type="text"
							className='input-basic ph-grey'
							placeholder='Your Name'
							value={this.state.fullName}
							onChange={(e) => this.onFullNameChange(e)} />
					</InputGroup>
					<HelpBlock>{this.state.fullNameValidationMessage}</HelpBlock>
				</FormGroup>

				<FormGroup validationState={this.emailValidationState()}>
					<InputGroup bsSize="large">
						<InputGroup.Addon className='input-addon grey'>
							<i className="fa fa-envelope ft-icon"></i>
						</InputGroup.Addon>
						<FormControl
							type="email"
							className='input-basic ph-grey'
							placeholder='Your Email Address'
							value={this.state.email}
							onChange={(e) => this.onEmailChange(e)} />
					</InputGroup>
					<HelpBlock>{this.state.emailValidationMessage}</HelpBlock>
				</FormGroup>

				<FormGroup validationState={this.passwordValidation()}>
					<InputGroup bsSize="large">
						<InputGroup.Addon className='input-addon grey'>
							<i className="fa fa-key ft-icon"></i>
						</InputGroup.Addon>
						<FormControl
							type="password"
							className='input-basic ph-grey'
							placeholder='Password'
							value={this.state.password}
							onChange={(e) => this.onPasswordChange(e)} />
					</InputGroup>
					<HelpBlock>{this.state.passwordValidationMessage}</HelpBlock>
				</FormGroup>

				<FormGroup className='app-checkbox left m-bottom-20' >
					<Checkbox validationState={this.state.checkedAccreditedInvestorValidation}
						checked={this.state.checkedAccreditedInvestor}
						onChange={(e) => this.onTermChecked(e, 'checkedAccreditedInvestor')}>
						<FormattedMessage id='register.cond1.1' defaultMessage='I am either not a U.S. Citizen or I am an ' />
						<a href="#" target="_blank" style={style.sign.term}>
							<FormattedMessage id='register.cond1.2' defaultMessage='' />
						</a></Checkbox>
					<Checkbox validationState={this.state.checkedWhitePaperValidation}
						checked={this.state.checkedWhitePaper}
						onChange={(e) => this.onTermChecked(e, 'checkedWhitePaper')}>
						<FormattedMessage id='register.cond2.1' defaultMessage='I have read and accept the ' />
						<a href="#" target="_blank" style={style.sign.term}>
							<FormattedMessage id='register.cond2.2' defaultMessage='White Paper' />
						</a></Checkbox>
					<Checkbox validationState={this.state.checkedSaftValidation}
						checked={this.state.checkedSaft}
						onChange={(e) => this.onTermChecked(e, 'checkedSaft')}>
						<FormattedMessage id='register.cond3.1' defaultMessage='I have read and accept the ' />
						<a href="#" target="_blank" style={style.sign.term}>
							<FormattedMessage id='register.cond3.2' defaultMessage='SAFT' />
						</a></Checkbox>
				</FormGroup>

				<div
					style={style.sign.btn}
					className='sign-btn'
					onClick={this.signup}>
					<FormattedMessage id='register.register' defaultMessage='REGISTER' />
				</div>

				{
					this.state.signupMessage.length > 0 ? (
						<AlertContainer>
							<Alert type="info" timeout="10">{this.state.signupMessage}</Alert>
						</AlertContainer>
					) : ''
				}

			</Row>
		);
	}
}

export default Register;