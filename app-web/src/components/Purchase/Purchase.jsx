import React, { Component } from 'react';

import { Row, 
	Col,
	form, 
	FormGroup,
	FormControl, 
	InputGroup, 
	Glyphicon, 
} from 'react-bootstrap';

import Header from '../Header/Header'

import './Purchase.css';

class Purchase extends Component {
	constructor(){
		super()

		this.state = {
			showLogout: true
		}
	}

	jumpToVerif = () => {
		this.props.history.push('./verification')
	}

	logout = () => {
		this.props.history.push('./')
	}

	render() {
		const style={
			text:{
				marginBottom: '10px'
			},

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
			},

		}

		return (
		<div>
			<Row className='no-margin'>
				<div style={style.menu}>
					<Col md={4} style={style.menu.logo} >
						VC Token
					</Col>
					<Col mdOffset={4} md={2} style={style.menu.items} >
						{this.state.showLogout ? <div style={style.menu.item} className='f-right m-right-20 bold' onClick={this.logout}>LOG OUT</div> : null}
					</Col>
				</div>
			</Row>

			<Header/>

			<div className="app-tab">
				<Col md={8} mdOffset={1}  xsOffset={1} xs={10}>
					<div className='left s-text m-bottom white'>PURCHASE TOKENS WITH</div>
					<div className="app-btn f-left">BITCOIN</div>
					<div className="app-btn f-left">LITECOIN</div>
					<div className="app-btn f-left">RIPPLE</div>
					<div className="app-btn f-left">FLAT</div>
				</Col> 

				<Col md={3} mdOffset={0} xsOffset={1} xs={10}>
					<div className='left s-text m-bottom white'>VERIFY YOUR IDENTITY</div>
					<div className="app-btn f-left bg-red" onClick={this.jumpToVerif}>VERIFICATION</div>
				</Col> 
			</div>

			<div className="pur-main grey">
				<div className='of'>
					<Col 
					mdOffset={1} 
					md={5} 
					xsOffset={1} 
					xs={10}
					className='app-card'>
					<div className='left m-bottom'>
						<span className='pur-number left'>1</span>
						TOKEN
					</div>
					<div className='left bold'>1 TOKEN = 0.00008801 BTC</div>
					<div className='left'>Calculated on January 24, 2018, 20:30 (1/25/2018, 02:30 UTC)</div>
					</Col>

					<Col mdOffset={0} md={5} xsOffset={1} xs={10} className='app-card'>
						<div className='left m-bottom'>
							<span className='pur-number left'>1.000002</span>
							TOKEN
						</div>
						<div className='left bold'>1 TOKEN = 0.00008801 BTC</div>
						<div className='left'>Calculated on January 24, 2018, 20:30 (1/25/2018, 02:30 UTC)</div>
					</Col>
				</div>

				<div className='of'>
					<Col 
					mdOffset={1} 
					md={10} 
					xsOffset={1}
					xs={10}
					className='app-card'
					>	
						<div className='m-top m-bottom-20 of'>
							<Col md={3} className='m-bottom-20'>
								<InputGroup bsSize="large">
									<InputGroup.Addon className='input-addon grey'>
										<Glyphicon glyph="globe"/>				
									</InputGroup.Addon>
									<FormControl type="text" className='input-basic'/>
								</InputGroup>
							</Col>
							<Col className='m-top m-bottom-20' md={1}>
								or
							</Col>
							<Col md={3} className='m-bottom-20'>
								<InputGroup bsSize="large">
									<InputGroup.Addon className='input-addon grey'>
										<Glyphicon glyph="piggy-bank"/>				
									</InputGroup.Addon>
									<FormControl type="text" className='input-basic'/>
								</InputGroup>
							</Col>
							<Col className='m-top black bold m-bottom-20' md={5}>
								PURCHASE TOKENS USING 0.00000000 BTC
							</Col>
						</div>

						<Col className='m-top' mdOffset={8} md={4}>
							<div className="app-btn f-left">PURCHASE</div>
						</Col>
					</Col>
				</div>

				<div className="pur-coins of">
					<Col mdOffset={1} md={2} xsOffset={2} xs={8} className="app-card f-left bg-light-blue white pur-l-card">
						<div className='n-text m-bottom'>Bitcoin</div>
						<div className='light'>$0.00 USD</div>
						<div className='light'> 0.00000000 Coins</div>
					</Col>
					<Col mdOffset={0} md={2} xsOffset={2} xs={8} className="app-card f-left bg-light-blue white pur-l-card">
						<div className='n-text m-bottom'>Bitcoin</div>
						<div className='light'>$0.00 USD</div>
						<div className='light'>0.00000000 Coins</div>
					</Col>
					<Col mdOffset={0} md={2} xsOffset={2} xs={8} className="app-card f-left bg-light-blue white pur-l-card">
						<div className='n-text m-bottom'>Bitcoin</div>	
						<div className='light'>$0.00 USD</div>
						<div className='light'>0.00000000 Coins</div>
					</Col>
					<Col mdOffset={0} md={2} xsOffset={2} xs={8} className="app-card f-left bg-light-blue white pur-l-card">
						<div className='n-text m-bottom'>Bitcoin</div>
						<div className='light'>$0.00 USD</div>
						<div className='light'>0.00000000 Coins</div>
					</Col>
					<Col mdOffset={0} md={2} xsOffset={2} xs={8} className="app-card f-left bg-light-blue white pur-l-card">
						<div className='n-text m-bottom'>Bitcoin</div>
						<div className='light'>$0.00 USD</div>
						<div className='light'>0.00000000 Coins</div>
					</Col>
				</div>

				<div className="pur-wallet of white">
					<Col md={10} mdOffset={1} xs={10} xsOffset={1} className="pur-l-card app-card bg-light-blue">
						<Col className='no-padding  m-bottom-20' md={1} xs={12}>
							<div className='bold b-text'>12</div>
							<div className='light'>jan 2018</div>
						</Col>
						<Col className='no-padding left m-bottom-20' md={3} xs={12}>
							<div className='bold'>PURCHASING USING FIAT</div>
							<div className='light'>2.00 USD</div>
						</Col>
						<Col className='no-padding left m-bottom-20' md={3} xs={12}>
							<div className='bold'>UNFULFILLED</div>
							<div className='light'>No Blockchain Transaction</div>
						</Col>
						<Col className='no-padding left m-bottom-20' md={3} xs={12}>
							<div className='bold'>NO TOKENS</div>
							<div className='light'>No Blockchain Transaction</div>
						</Col>
						<Col className='no-padding' md={2} xs={12} className='f-left bg-red pur-btn'>
							WALLET INFORMATION
						</Col>
					</Col>
				</div>

			</div>

		</div>
		);
	}
}

export default Purchase;