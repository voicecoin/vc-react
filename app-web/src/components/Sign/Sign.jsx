import React, { Component } from 'react';
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

	signup(){
		let data = {
			fullName: this.state.signName,
			email: this.state.signEmail,
			password: this.state.signPwd
		}
		signApi.sign(data).then(function(data){
			console.log(data)
		})
	}

	login(){
		signApi.login(this.state.logEmail, this.state.logPwd)
		.then(function(data){
			console.log(data)
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
			padding: '50px 100px',
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
			padding: '50px 100px',
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
				<InputGroup.Addon className='input-addon'>
					<Glyphicon glyph="envelope" className='white'/>				
				</InputGroup.Addon>
				<FormControl 
				type="text" 
				className='input-basic white' 
				value={this.state.email}
				onChange={(e) => this.handleChange(e, 'logEmail')}/>
			</InputGroup>

			<InputGroup className='app-input' bsSize="large">
				<InputGroup.Addon className='input-addon'>
					<Glyphicon glyph="lock" className='white'/>
				</InputGroup.Addon>
				<FormControl 
				type="text" 
				className='input-basic white' 
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
				<InputGroup className='app-input' style={style.sign.input} bsSize="large">
					<InputGroup.Addon className='input-addon grey'>
						<Glyphicon glyph="pencil"/>				
					</InputGroup.Addon>
					<FormControl 
					type="text" 
					className='input-basic'
					value={this.state.signName}
					onChange={(e) => this.handleChange(e, 'signName')}/>
				</InputGroup>
			</div>

			<div className='app-input'>
				<InputGroup bsSize="large">
					<InputGroup.Addon className='input-addon grey'>
					<Glyphicon glyph="envelope"/>				
					</InputGroup.Addon>
					<FormControl 
					type="text" 
					className='input-basic'
					value={this.state.signEmail}
					onChange={(e) => this.handleChange(e, 'signEmail')}/>
				</InputGroup>
			</div>

			<div className='app-input'>
				<InputGroup bsSize="large">
					<InputGroup.Addon className='input-addon grey'>
						<Glyphicon glyph="lock" />
					</InputGroup.Addon>
					<FormControl 
					type="text" 
					className='input-basic'
					value={this.state.signPwd}
					onChange={(e) => this.handleChange(e, 'signPwd')}/>
				</InputGroup>
			</div>

			<div className='app-checkbox left' >
				<Checkbox>I have read and accept the White Paper</Checkbox>
			</div>

			<div className='app-checkbox left m-bottom-20'>
				<Checkbox>Remember me</Checkbox>
			</div>

			<div style={style.sign.btn} className='sign-btn' onClick={this.signup.bind(this)}>
				REGISTER
			</div>

        </Col>
        
      </div>
    );
  }
}

export default Sign;