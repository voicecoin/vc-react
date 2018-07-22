import React, { Component } from 'react';

import {
	Row,
	Col,
	form,
	FormGroup,
	FormControl,
	InputGroup,
	Glyphicon,
	ControlLabel,
	HelpBlock
} from 'react-bootstrap';
// COMPONENTS
import Header from '../Header/Header'
import Declar from './components/Declar'
import Indent from './components/Indent'
import Residence from './components/Residence'
import Document from './components/Document'
import Personal from './components/Personal'
import Navbar from '../Navbar/Navbar'
// STYLE
import './Verif.css';
import Logo from '../../vendor/img/logo.png'

import { FormattedMessage } from 'react-intl';

class Verif extends Component {
	constructor() {
		super();

		this.handleChange = this.handleChange.bind(this);

		this.state = {
			value: '',
			username: '',
			showLogout: true,
			showUsername: true
		};
	}

	componentWillMount() {
		// GET USERNAME FROM LOCALSTORAGE
		let username = localStorage.getItem('username')
		this.setState({
			username: username
		})
	}

	getValidationState() {
		const length = this.state.value.length;
		if (length > 10) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
		return null;
	}

	handleChange(e) {
		this.setState({ value: e.target.value });
	}

	jumpToPurchase = () => {
		this.props.history.push('./purchase')
	}

	logout = () => {
		localStorage.removeItem('token')
		this.props.history.push('./')
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
					float: 'left',
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
			}
		}

		return (
			<div>
				<Navbar
					changeLocale={this.props.changeLocale}
					showLogout={this.state.showLogout}
					showUsername={this.state.showUsername}
					username={this.state.username}
					logout={this.logout} />

				<Header />

				<div className="app-tab">
					<Col md={10} mdOffset={1} xsOffset={1} xs={10}>
						<div className='left s-text m-bottom white bold'>
							<FormattedMessage id='verif.purchaseTokens' defaultMessage='PURCHASE TOKENS' />
						</div>
						<div className="app-btn f-left" onClick={this.jumpToPurchase}>
							<FormattedMessage id='verif.backPurchase' defaultMessage='BACK PURCHASE' />
						</div>
					</Col>
				</div>

				<div className="ver-main of bg-white of">
					<Personal />

					<Indent />

					<Declar />

					<Residence />

					<Document />
				</div>
			</div>
		);
	}
}

export default Verif;