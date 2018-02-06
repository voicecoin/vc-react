import React, { Component } from 'react';

import { Row, 
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
	NavbarBrand
} from 'react-bootstrap';

import Logo from '../../vendor/img/logo.png'

class iNavbar extends Component {
    render(){
        const style = {
			menu: {
				borderRadius: '0px',
				border: 'none',
				color: '#fff',
				item: {
					color: '#fff !important'
				},
			}
		}

        return (
			<Navbar style={style.menu} inverse collapseOnSelect className='bg-blue'>
				<Navbar.Header>
					<Navbar.Brand>
						<img className='home-menu-logo' src={Logo} alt="#"/>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse style={style.collapse}>
					<Nav pullRight>
						{
							this.props.showUsername && this.props.username? 
							<NavItem eventKey={1} href="#" >
								<span className='navbar-item'>{ this.props.username }</span>
							</NavItem> : null
						}
						<NavItem eventKey={2} href="#" className={style.menu.item} onClick={this.props.logout} >
							<span className='navbar-item'>{ this.props.showLogout ? 'LOGOUT' : null }</span>
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
        )
    }
}

export default iNavbar
