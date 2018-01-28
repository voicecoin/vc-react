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
		Modal,
		Button,
		Checkbox } from 'react-bootstrap';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'

import Header from '../Header/Header'
//services
import signApi from './services/api'
//style
import './Sign.css';
import Logo from '../../vendor/img/logo.png'

class Sign extends Component {
	constructor(){
		super();

		this.state = {
			logEmail: '',
			logPwd: '',
			signName: '',
			signEmail: '',
			signPwd: '',
			showLogout: false,
			show: false
		}
	}

	componentDidMount(){
		let self = this;
		if(this.props.match.params.key){
			signApi.activate(this.props.match.params.key)
			.then(function(data){
				self.handleShow();
			})
		}
	}


	handleHide = () => {
		this.setState({ show: false });
		this.props.history.push('../')
	  }
	
	handleShow = () => {
		this.setState({ show: true });
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
			alert('Sign up successed!')
		})
	}

	login = () => {
		let self = this;
		signApi.login(this.state.logEmail, this.state.logPwd)
		.then(function(data){
			alert('Login successed!')
			self.props.history.push('/purchase')
		}, function(data){
			alert(data.data)
		})
	}
	
	handleChange(e, name){	
		this.setState({ [name]: e.target.value })
	}

  render() {
    const style = {
		menu: {
			color: '#fff',
			backgroundColor: '#0065ae',
			height: '70px',
			logo: {
				paddingTop: '10px',
				height: '100%',
				float: 'left'
			},
			items: {
				padding: '0px',
				height: '100%'
			},
			item: {
				paddingTop: '20px',
				height: '100%',
				display: 'InlineBlock',
			}
		},

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
		<div className='of m-bottom-60'>
			<Row className='no-margin'>
				<div style={style.menu}>
					<Col md={4} style={style.menu.logo} >
						<img className='home-menu-logo' src={Logo} alt="#"/>
					</Col>
					<Col mdOffset={4} md={2} style={style.menu.items} >
						{this.state.showLogout ? <div style={style.menu.item} className='f-right m-right-20 bold' onClick={this.logout}>LOG OUT</div> : null}
					</Col>
				</div>
			</Row>

			<Header/>

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
			
			<Modal
			show={this.state.show}
			onHide={this.handleHide}
			>
				<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title">
					Contained Modal
				</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
				ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
				</Modal.Body>
				<Modal.Footer>
				<Button onClick={this.handleHide}>Close</Button>
				</Modal.Footer>
		  	</Modal>
		</div>
      
    );
  }
}

export default Sign;