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
} from 'react-bootstrap';

import Logo from '../../vendor/img/logo.png'

class Menu extends Component {
    render(){
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
            <Row className='no-margin'>
                <div style={style.menu}>
                    <Col md={4} style={style.menu.logo} >
                        <img src={Logo} alt="#"/>
                    </Col>
                    <Col mdOffset={4} md={1} style={style.menu.items} >
                        { 
							this.props.showUsername ? 
							<div 
							style={style.menu.item} 
							className='app-btn f-right m-right-20 bold'>
							{this.props.username || ''}
							</div> 
							: null }
                    </Col>
                    <Col md={1} style={style.menu.items} >
                        { 
							this.props.showLogout ? 
							<div 
							style={style.menu.item} 
							className='app-btn f-right m-right-20 bold' 
							onClick={this.props.logout}>LOGOUT
							</div> 
							: null }
                    </Col>
                </div>
            </Row>

        )
    }
}

export default Menu

