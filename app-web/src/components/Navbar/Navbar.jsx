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
	HelpBlock,
	Nav,
	Navbar,
	NavItem,
	NavDropdown,
	NavbarBrand,
	MenuItem
} from 'react-bootstrap';

import Logo from '../../vendor/img/logo.png'
import msg from '../../config/i18n';

import { FormattedMessage } from 'react-intl';

// STYLE
import './Navbar.css';

class iNavbar extends Component {
	constructor() {
		super()
		var lang = localStorage.getItem('vc-react-lang');
		if (!lang) {
			lang = 'en';
		}
		this.state = {
			langTitle: msg[lang]['title.cap']
		}

		this.changeLang.bind(this)
	}

	changeLang(lang, title) {
		this.setState({ langTitle: title });
		this.props.changeLocale(lang);
	}

	render() {
		const style = {
			menu: {
				borderRadius: '0px',
				border: 'none',
				color: '#fff',
				item: {
					color: '#fff !important',
				},
			}
		}

		return (
			<Navbar style={style.menu} collapseOnSelect className='nav-bg'>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="https://voicecoin.io/"><img className='home-menu-logo' src={Logo} alt="Voicecoin" /></a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse style={style.collapse}>
					<Nav pullRight>
						{/*<NavItem eventKey={3} href="/pricing" className={style.menu.item}>
							<span className='navbar-item'>
								<FormattedMessage id='navbar.pricing' defaultMessage='PRICING' />
							</span>
						</NavItem>*/}
						<NavItem eventKey={5} href="https://voicecoin.io" target="_blank" className={style.menu.item}>
							<span className='navbar-item'>
								<FormattedMessage id='navbar.overview' defaultMessage='OVERVIEW' />
							</span>
						</NavItem>
						<NavItem eventKey={4} href="https://voicecoin.io/faq.html" target="_blank" className={style.menu.item}>
							<span className='navbar-item'>
								<FormattedMessage id='navbar.faq' defaultMessage='FAQ' />
							</span>
						</NavItem>
						<NavDropdown
							ref='navbarDropdown'
							eventKey={6}
							title={this.state.langTitle}
							className={style.menu.item}
							id="navbar-language">
							<MenuItem onClick={() => { this.changeLang('en', 'ENGLISH'); }}>English</MenuItem>
							<MenuItem onClick={() => { this.changeLang('zh', '简体中文'); }}>简体中文</MenuItem>
						</NavDropdown>
						{
							this.props.showUsername && this.props.username ?
								<NavItem eventKey={1} href="#" >
									<span className='navbar-item'>{this.props.username}</span>
								</NavItem> : null
						}
						<NavItem eventKey={2} href="#" className={style.menu.item} onClick={this.props.logout} >
							<span className='navbar-item'>
								{this.props.showLogout ? <FormattedMessage id='navbar.logout' defaultMessage='LOGOUT' /> : null}
							</span>
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default iNavbar
