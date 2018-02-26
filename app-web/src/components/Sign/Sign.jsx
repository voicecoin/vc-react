import React, { Component } from 'react';
// COMPONENTS
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
import Header from '../Header/Header'
import Register from './Register'
import Login from './Login'
// SERVICES
import signApi from './services/api'
// STYLE
import './Sign.css';
import Logo from '../../vendor/img/logo.png'

class Sign extends Component {
	constructor(){
		super();
		
		this.state = {
			showLogout: false
		}
	}

	login = (email, pwd) => {
		let self = this;

		signApi.login(email, pwd)
		.then(function(data){
			localStorage.setItem('token', data)
			signApi.userInfo().then((data) => {
                localStorage.setItem('username', data.fullName || '')
                self.props.history.push('/purchase')
            })
		}, function(response){
			self.setState({passwordValidationMessage: response.data})
		})
	}
	  
	render() {
		const style = {
				menu: {
					color: '#fff',
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
						<div style={style.menu} className="main-bg-color">
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
							<Register />
						</Col>
					</div>
				</Col>
			</Row>
		);
	}
}

export default Sign;