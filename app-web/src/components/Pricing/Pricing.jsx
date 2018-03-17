import React, { Component } from 'react'

import {
	Row,
	Col,
	form,
	FormGroup,
	FormControl,
	InputGroup,
	Glyphicon,
	Modal,
	Button,
	Panel,
	PanelBody,
	HelpBlock
} from 'react-bootstrap';

//components
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'

import Logo from '../../vendor/img/logo.png'

class Pricing extends Component {
	constructor() {
		super()

		this.state = {
			userInfo: {}
		}
	}

	// LIFE-CYCLE Func	
	componentWillMount = () => {
		let self = this;

		let username = localStorage.getItem('username')
		this.setState({
			username: username
		})

	}

	componentDidMount() {

	}

	logout = () => {
		localStorage.removeItem('token')
		this.props.history.push('./')
	}

	render() {
		const style = {
			text: {
				marginBottom: '10px'
			},

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
					paddingTop: '25px',
					height: '100%',
					display: 'InlineBlock',
				}
			},
		}

		let self = this

		return (
			<div>
				<Navbar
					changeLocale={this.props.changeLocale}
					showLogout={this.state.showLogout}
					showUsername={this.state.showUsername}
					username={this.state.username}
					logout={this.logout} />

				<Header />

				<Row className="no-margin pur-main dark-grey">
					<Col>

					</Col>
				</Row>

			</div>
		);
	}
}

export default Pricing;