import React, { Component } from 'react';
// COMPONENTS
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
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Register from './Register'
import Login from './Login'
// SERVICES
import signApi from './services/api'

import { AlertList, Alert, AlertContainer } from "react-bs-notifier";

// STYLE
import './Sign.css';
import Logo from '../../vendor/img/logo.png'
import BackgroundImage from '../../vendor/img/background-dark.png'

class Sign extends Component {
	constructor() {
		super();

		this.state = {
			showLogout: false,
			passwordValidationMessage: '',
			style: {
				wrapper: {
					color: '#fff',
				},
				border1: {
					borderRadius: '5px',
				},
				border2: {
					borderRadius: '5px 0 0 5px',
				},
				border3: {
					borderRadius: '0 5px 5px 0',
				},
				border4: {
					borderRadius: '0',
				},
			}
		}
	}

	login = (email, pwd) => {
		let self = this;

		signApi.login(email, pwd)
			.then(function (data) {
				localStorage.setItem('token', data)
				signApi.userInfo().then((data) => {
					localStorage.setItem('username', data.fullName || '')
					self.props.history.push('/purchase')
				})
			}, function (response) {
				self.setState({ passwordValidationMessage: response.data })
			})
	}

	getMainPart = () => {
		switch (this.props.type) {
			case 'both':
				return <div style={this.state.style.wrapper}>
					<Col mdOffset={2} md={4} xs={12}>
						{
							this.props.match ? (
								<Login border={this.state.style.border4}
									activationCode={this.props.match.params.key}
									login={this.login} />
							) : (
									<Login border={this.state.style.border4}
										login={this.login} />
								)
						}
					</Col>
					<Col mdOffset={0} md={4} xs={12}>
						<Register border={this.state.style.border4} />
					</Col>
				</div>;
			case 'login':
				return <div style={this.state.style.wrapper}>
					<Col mdOffset={4} md={4} xs={12}>
						{
							this.props.match ? (
								<Login border={this.state.style.border1}
									activationCode={this.props.match.params.key}
									login={this.login} />
							) : (
									<Login border={this.state.style.border1}
										login={this.login} />
								)
						}
					</Col>
				</div>;
			case 'register':
				return <div style={this.state.style.wrapper}>
					<Col mdOffset={4} md={4} xs={12}>
						<Register border={this.state.style.border1} />
					</Col>
				</div>;
		}
	}

	render() {


		return (
			<Row className='no-margin'>
				<Col className='of m-bottom-60'>
					<Navbar
						changeLocale={this.props.changeLocale}
						showLogout={this.state.showLogout}
						showUsername={this.state.showUsername}
						username={this.state.username}
						logout={this.logout} />
					<Header />

					{this.getMainPart()}

				</Col>

				{
					this.state.passwordValidationMessage.length > 0 ? (
						<AlertContainer>
							<Alert type="danger" timeout="10">{this.state.passwordValidationMessage}</Alert>
						</AlertContainer>
					) : ''
				}
			</Row>
		);
	}
}

export default Sign;