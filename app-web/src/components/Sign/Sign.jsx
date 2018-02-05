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
		Checkbox,
		HelpBlock } from 'react-bootstrap';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'

import Header from '../Header/Header'
import Register from './Register'
import Login from './Login'

//services
import signApi from './services/api'
//style
import './Sign.css';
import Logo from '../../vendor/img/logo.png'

class Sign extends Component {
	constructor(){
		super();

		this.state = {
		}
	}

	login = (email, pwd) => {
		let self = this;
		signApi.login(email, pwd)
		.then(function(data){
			localStorage.setItem('token', data)
			self.props.history.push('/purchase')
		}, function(response){
			self.setState({passwordValidationMessage: response.data})
		})
	}

	signup = (signupData) => {
		let self = this;

    // check data
		if(signupData.fullName.length < 3 ||
			signupData.email.length < 5 ||
			signupData.password.length < 6) return;

    if(!self.state.checkedAccreditedInvestor) self.setState({checkedAccreditedInvestorValidation: 'error'})
		if(!self.state.checkedWhitePaper)	self.setState({checkedWhitePaperValidation: 'error'})
		if(!self.state.checkedSaft) self.setState({checkedSaftValidation: 'error'})

		if(!self.state.checkedAccreditedInvestor ||
			!self.state.checkedWhitePaper ||
			!self.state.checkedSaft) return;

		signApi.sign(signupData).then(function(data){
			self.setState({signupMessage: data})
		}, function(response){
			self.setState({signupMessage: response.data})
		})
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
					display: 'InlineBlock'
				}
			},

			wrapper: {
				color: '#fff'
			}
    }

    return (
			<Row className='no-margin'>
				<Col className='of m-bottom-60'>
					<Row className='no-margin'>
						<div style={style.menu}>
							<Col md={4} style={style.menu.logo} >
								<img className='home-menu-logo' src={Logo} alt="#"/>
							</Col>
							<Col mdOffset={4} md={2} style={style.menu.items} >
								{this.state.showLogout ? <div style={style.menu.item} className='app-btn f-right m-right-20 bold' onClick={this.logout}>LOGOUT</div> : null}
							</Col>
						</div>
					</Row>
						
					<Header/>
					
					<div style={style.wrapper}>
						
						<Col mdOffset={2} md={4} xsOffset={1} xs={10}>
							<Login 
							activationCode={this.props.match.params.key} 
							login={this.login}/>
						</Col>

						<Col mdOffset={0} md={4} xsOffset={1} xs={10}>
							<Register 
							signup={this.signup}/>
						</Col>
					
					</div>
				</Col>
			</Row>
    );
  }
}

export default Sign;