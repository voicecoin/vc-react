import React, { Component } from 'react';

import { Row, 
	Col,
	form, 
	FormGroup,
	FormControl, 
	InputGroup, 
	Glyphicon, 
} from 'react-bootstrap';
//components
import Header from '../Header/Header'
//services
import purchaseApi from '../Purchase/api'
//styling
import './Purchase.css';
import Logo from '../../vendor/img/logo.png'

class Purchase extends Component {
	constructor(){
		super()

		this.state = {
			showLogout: true,
			currencies: [],
			curPrice: {},
			prices: {},
			tokenNum: 0,
			coinNum: 0,
			isToken: true
		}
	}
	
	componentWillMount = () => {
		let self = this;

		purchaseApi.getCurrencies().then(function(data){
			self.setState({ currencies: data })
		})

		purchaseApi.getPrices().then(function(data){
			self.setState({ prices: data })
			self.setState({ curPrice: data[0] })
		})
	}

	selectCurCoin = (name) => {
		let cur = this.state.prices.find(function(v){
			return v.name === name
		})
		this.setState({ curPrice:cur })
	}

	handleChange(e, name){	
		this.setState({ [name]: e.target.value })
	}

	jumpToVerif = () => {
		this.props.history.push('./verification')
	}

	logout = () => {
		localStorage.removeItem('token')
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
					display: 'InlineBlock',
				}
			},
		}

		return (
		<div>
			<Row className='no-margin'>
				<div style={style.menu}>
					<Col md={4} style={style.menu.logo} >
						<img src={Logo} alt="#"/>
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
					{
						this.state.currencies.map((v) => {
							return <div className="app-btn f-left" onClick={this.selectCurCoin.bind(this, v.symbol)}>{v.name}</div>
						})
					}
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
					<div className='left bold'>
						{ '1 TOKEN = ' + this.state.curPrice.v2c + ' ' + this.state.curPrice.name }
					</div>
					<div className='left'>Calculated on January 24, 2018, 20:30 (1/25/2018, 02:30 UTC)</div>
					</Col>

					<Col mdOffset={0} md={5} xsOffset={1} xs={10} className='app-card'>
						<div className='left m-bottom'>
							<span className='pur-number left'>1.000002</span>
							{this.state.curPrice.name}
						</div>
						<div className='left bold'>{'1 ' + this.state.curPrice.name + ' = ' + this.state.curPrice.c2v + ' TOKEN'}</div>
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
									<FormControl 
									type="text" 
									className='input-basic'
									placeholder='TOKENS'
									// this.coinNum * this.state.curPrice.c2v
									value={ this.state.isToken ? this.state.tokenNum : this.state.coinNum * this.state.curPrice.c2v}
									onFocus={ () => this.state.isToken = true }
									onChange={ (e) => this.handleChange(e, 'tokenNum')}
									/>
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
									<FormControl 
									type="text" 
									className='input-basic'
									placeholder={ this.state.curPrice.name }
									value={ this.state.isToken ? this.state.tokenNum * this.state.curPrice.v2c : this.state.coinNum}
									onFocus={ () => this.state.isToken = false } 
									onChange={ (e) => this.handleChange(e, 'coinNum') }
									/>
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