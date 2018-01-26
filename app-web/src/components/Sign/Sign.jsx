import React, { Component } from 'react';
//libs
import { Grid, 
		Row, 
		Col, 
		form, 
		FormGroup,
		FormControl, 
		InputGroup, 
		Glyphicon,
		Checkbox } from 'react-bootstrap';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
//services
import signApi from './services/api'
//style
import './Sign.css';

class Sign extends Component {
	constructor(){
		super();

		this.state = {
			logEmail: '',
			logPwd: '',
			signName: '',
			signEmail: '',
			signPwd: ''
		}
	}

	validateEmail(email){
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(String(email).toLowerCase());
	}

	validatePwd(pwd){
		
	}

	getEmailValidationState(){
		if(this.state.signEmail === '')return null
		if(this.validateEmail(this.state.signEmail)){
			return 'success'
		}else return 'error'
	}

	signup(){
		let data = {
			fullName: this.state.signName,
			email: this.state.signEmail,
			password: this.state.signPwd
		}
		signApi.sign(data).then(function(data){
			alert('successed!')
		})
	}

	login(){
		signApi.login(this.state.logEmail, this.state.logPwd)
		.then(function(data){
			alert('successed!')
		})
	}
	
	handleChange(e, name){	
		this.setState({ [name]: e.target.value })
	}

  render() {
    const style = {
		wrapper: {
			color: '#fff'
		},

		log: {
			opacity: '0.95',
			height: '650px',
			padding: '3% 5%',
			backgroundColor: '#3b96d5',
			borderRadius: '2px 0px 0px 2px',
			header: {
			fontSize: '30px',
			margin: '30px 0 50px 0px',
			textAlign:'left'
			}
		},

		sign: {
			backgroundColor: '#fff',
			height: '650px',
			padding: '3% 5%',
			borderRadius: '0px 2px 2px 0px',
			header: {
				color: '#3b96d5',
				fontSize: '30px',
				margin: '30px 0 50px 0px',
				textAlign:'left'
			}
			
		},
    }

    return (
      <div style={style.wrapper}>
		<Col mdOffset={2} md={4} xsOffset={1} xs={10} style={style.log}>
			<div style={style.log.header}> 
				Login
			</div>

			<InputGroup className='app-input' bsSize="large">
				<InputGroup.Addon className='input-addon border-white'>
					<Glyphicon glyph="envelope" className='white'/>				
				</InputGroup.Addon>
				<FormControl 
				placeholder='Please enter the email'
				type="email" 
				className='input-basic white ph-white border-white' 
				value={this.state.email}
				onChange={(e) => this.handleChange(e, 'logEmail')}/>
			</InputGroup>

			<InputGroup className='app-input' bsSize="large">
				<InputGroup.Addon className='input-addon border-white'>
					<Glyphicon glyph="lock" className='white'/>
				</InputGroup.Addon>
				<FormControl 
				type="password" 
				className='input-basic white ph-white border-white'
				placeholder='Please enter the password' 
				value={this.state.pwd}
				onChange={(e) => this.handleChange(e, 'logPwd')}/>
			</InputGroup>

			<div style={style.log.btn} className='sign-btn' onClick={this.login.bind(this)}>
				LOGIN
			</div>

        </Col>

        <Col mdOffset={0} md={4} xsOffset={1} xs={10} style={style.sign}>
			<div style={style.sign.header}> 
				Register
			</div>

			<div>
				<FormGroup>
					<InputGroup 
					className='app-input' 
					style={style.sign.input} bsSize="large">
						<InputGroup.Addon className='input-addon grey'>
							<Glyphicon glyph="pencil"/>				
						</InputGroup.Addon>
						<FormControl 
						type="text" 
						className='input-basic ph-grey'
						placeholder='Please enter the username'
						value={this.state.signName}
						onChange={(e) => this.handleChange(e, 'signName')}/>
					</InputGroup>
				</FormGroup>
			</div>
			

			<div className='app-input'>
				<FormGroup validationState={this.getEmailValidationState()}>
					<InputGroup bsSize="large">
						<InputGroup.Addon className='input-addon grey'>
						<Glyphicon glyph="envelope"/>				
						</InputGroup.Addon>
						<FormControl 
						type="email" 
						className='input-basic ph-grey'
						placeholder='please enter the email'
						value={this.state.signEmail}
						onChange={(e) => this.handleChange(e, 'signEmail')}/>
					</InputGroup>
				</FormGroup>
			</div>

			<div className='app-input'>
				<FormGroup>
					<InputGroup bsSize="large">
						<InputGroup.Addon className='input-addon grey'>
							<Glyphicon glyph="lock" />
						</InputGroup.Addon>
						<FormControl 
						type="password" 
						className='input-basic ph-grey'
						placeholder='please enter the password'
						value={this.state.signPwd}
						onChange={(e) => this.handleChange(e, 'signPwd')}/>
					</InputGroup>
				</FormGroup>
			</div>

			<div className='app-checkbox left m-bottom-20' >
				<Checkbox>I have read and accept the White Paper</Checkbox>
			</div>

			{/* <div className='app-checkbox left m-bottom-20'>
				<Checkbox>Remember me</Checkbox>
			</div> */}

			<div style={style.sign.btn} className='sign-btn' onClick={this.signup.bind(this)}>
				REGISTER
			</div>

        </Col>
        
      </div>
    );
  }
}

export default Sign;