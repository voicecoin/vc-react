import React, { Component } from 'react';

import { Row, 
	Col,
	form, 
	FormGroup,
	FormControl, 
	InputGroup, 
	Glyphicon,
	ControlLabel,
	HelpBlock
} from 'react-bootstrap';

import Header from '../Header/Header'

import Declar from './components/Declar'
import Indent from './components/Indent'
import Residence from './components/Residence'
import Document from './components/Document'
import Personal from './components/Personal'

import './Verif.css';

class Verif extends Component {
	constructor(props, context) {
		super(props, context);
	
		this.handleChange = this.handleChange.bind(this);
	
		this.state = {
		  value: ''
		};
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
		this.props.history.push('./')
	}

	render() {
		const style = {
			menu: {
				color: '#fff',
				backgroundColor: '#0065ae',
				height: '60px',
				// logo
				// logo
				// logo
				logo: {
					paddingTop: '20px',
					height: '100%',
					float: 'left'
				},
				// items
				// items
				// items
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
				<Row className='no-margin'>
					<div style={style.menu}>
						<Col md={4} style={style.menu.logo} >
							VC Token
						</Col>
						<Col mdOffset={4} md={2} style={style.menu.items} >
							<div style={style.menu.item} className='f-right m-right-20 bold' onClick={this.logout}>
								LOG OUT
							</div>
						</Col>
					</div>
				</Row>

				<Header/>
				
				<div className="app-tab">
					<Col md={10} mdOffset={1}  xsOffset={1} xs={10}>
						<div className='left s-text m-bottom'>PURCHASE TOKENS WITH</div>
						<div className="app-btn f-left" onClick={this.jumpToPurchase}>BITCOIN</div>
					</Col> 
				</div>

				<div className="ver-main of bg-white">
					<Personal/>

					<Indent/>

					<Declar/>

					<Residence/>

					<Document/>
				</div>
			</div>
		);
	}
}

export default Verif;