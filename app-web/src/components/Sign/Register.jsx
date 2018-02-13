import React, { Component } from 'react';
// COMPONENTS
import {Alert,
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
		HelpBlock } from 'react-bootstrap';
import AlertSimple from '../ReactAlert/AlertSimple'
// SERVICES
import signApi from './services/api'
// STYLE
import './Sign.css';

class Register extends Component {
	constructor(){
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

	componentDidMount(){
		let self = this;
	}

	// FUNC() VALID CHECK
	fullNameValidationState(){
		if(this.state.fullName.length == 0) return null;
		return this.state.fullName.length > 2 ? 'success' : 'error';
	}
	
	emailValidationState(){
		if(this.state.email === '') return null
		return signApi.validateEmail(this.state.email) ? 'success' : 'error'; 
	}

	passwordValidation(){
		if(this.state.password.length == 0) return null;
		return this.state.password.length > 5 ? 'success' : 'error';
	}

	// FUNC() ON CHANGE
	onFullNameChange(e){	
		let self = this;
		self.setState({ fullName: e.target.value })
		if(self.state.fullName.length < 3){
			self.setState({})
		}
	}

	onEmailChange(e){
		this.setState({ email: e.target.value })
	}

	onPasswordChange(e){	
		this.setState({ password: e.target.value })
	}
	
	onTermChecked(e, name){
	// clear error
		this.setState({ [name]: !this.state[name], [name + 'Validation']: null})
	}

	signup = () => {
		let self = this;

    	// check data
		if(self.state.fullName.length < 3 ||
			self.state.email.length < 5 ||
			self.state.password.length < 6) return;

   		if(!self.state.checkedAccreditedInvestor) self.setState({checkedAccreditedInvestorValidation: 'error'})
		if(!self.state.checkedWhitePaper)	self.setState({checkedWhitePaperValidation: 'error'})
		if(!self.state.checkedSaft) self.setState({checkedSaftValidation: 'error'})

		if(!self.state.checkedAccreditedInvestor ||
			!self.state.checkedWhitePaper ||
			!self.state.checkedSaft) return;
		
		let signupData = {
			fullName: self.state.fullName,
			email: self.state.email,
			password: self.state.password
		}

		signApi.sign(signupData).then(function(data){
			self.setState({signupMessage: data})
		}, function(response){
			self.setState({signupMessage: response.data})
		})
	}
	
	render() {
		const style = {
				sign: {
					backgroundColor: '#fff',
					height: '550px',
					padding: '3rem',
					borderRadius: '0px 5px 5px 0px',
					header: {
						color: '#3b96d5',
						fontSize: '25px',
						fontWeight: 600,
						margin: '0px 0px 20px 0px',
						textAlign:'left'
					}
				},
			}

		return (
			<Row style={style.sign}>
				<div style={style.sign.header}> 
					Register
				</div>

				<FormGroup validationState={this.fullNameValidationState()}>
				<InputGroup bsSize="large">
					<InputGroup.Addon className='input-addon grey'>
					<i className="fa fa-pencil ft-icon"></i>
					</InputGroup.Addon>
					<FormControl 
					type="text" 
					className='input-basic ph-grey'
					placeholder='Please enter the username'
					value={this.state.fullName}
					onChange={(e) => this.onFullNameChange(e)}/>
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
					placeholder='please enter the email'
					value={this.state.email}
					onChange={(e) => this.onEmailChange(e)}/>
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
					placeholder='please enter the password'
					value={this.state.password}
					onChange={(e) => this.onPasswordChange(e)}/>
				</InputGroup>
				<HelpBlock>{this.state.passwordValidationMessage}</HelpBlock>
				</FormGroup>

				<FormGroup className='app-checkbox left m-bottom-20' >
				<Checkbox validationState={this.state.checkedAccreditedInvestorValidation} 
					checked={this.state.checkedAccreditedInvestor} 
					onChange={(e) => this.onTermChecked(e, 'checkedAccreditedInvestor')}>I am either not a U.S. Citizen or I am an <a href="#" target="_blank">Accredited Investor</a></Checkbox>
				<Checkbox validationState={this.state.checkedWhitePaperValidation} 
					checked={this.state.checkedWhitePaper} 
					onChange={(e) => this.onTermChecked(e, 'checkedWhitePaper')}>I have read and accept the <a href="#" target="_blank">White Paper</a></Checkbox>
				<Checkbox validationState={this.state.checkedSaftValidation} 
					checked={this.state.checkedSaft} 
					onChange={(e) => this.onTermChecked(e, 'checkedSaft')}>I have read and accept the <a href="#" target="_blank">SAFT</a></Checkbox>
				</FormGroup>

				<div 
				style={style.sign.btn} 
				className='sign-btn' 
				onClick={ this.signup }>
					REGISTER
				</div>
				
				<AlertSimple bsStyle="success" content={this.state.signupMessage} />
			</Row>
		);
	}
}

export default Register;