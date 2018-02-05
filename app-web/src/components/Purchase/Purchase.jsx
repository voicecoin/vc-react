import React, { Component } from 'react';

import Moment from 'react-moment';
import { Row, 
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import QRCode from 'qrcode.react'
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
			tokenNum: null,
			coinNum: null,
			QRstr: '',
			//coupon
			coupons: [],
			couponLink: '',
			curCp: {},
			couponCode: '',
			sendEmail: '',
			contri: {},
			showInstructionModalWhenLogin: true,
			showCPModal: false,
			showModal: false,
			couponValidationState: null,
			couponValidationMessage: ''
		}
	}
	
	componentWillMount = () => {
		let self = this;

		let t = new Date();

		purchaseApi.getCurrencies().then(function(data){
			self.setState({ currencies: data })
		})

		purchaseApi.getPrices().then(function(data){
			self.setState({ prices: data })
			self.setState({ curPrice: data[0] })
		})

		purchaseApi.getContri().then((data) => {
			self.setState({ contri: data })
		})
	}

	componentDidMount(){
		console.log(this.props.num)
	}

	selectCurCoin = (name) => {
		let cur = this.state.prices.find(function(v){
			return v.name === name
		})
		this.setState({ curPrice:cur })
		this.setState({ 
			tokenNum: this.state.tokenNum, 
			coinNum: this.state.tokenNum * this.state.curPrice.v2c 
		})

	}

	purchaseToken = () => {
		let cur = this.state.curPrice.name;
		let coupon = this.state.couponCode;
		let self = this;
		self.setState({showModal: true})
		purchaseApi.purchase(cur, coupon).then(function(data){
			self.setState({ QRstr: data })
		})
	}

	showCPModal = () => {
		let self = this;
		self.state.showCPModal = true;

		purchaseApi.getCoupon().then(function(data){
			self.setState({ coupons: data });
			self.setState({ curCp: data[0] })
			getFirstCoupon.call(self, data[0].id);
		})

		let getFirstCoupon = (id) => {
			purchaseApi.getCouponLink(id).then((data) => {
				this.setState({ couponLink: data })
			})
		}
	}

	handleCouponChange = (e) => {
		let self = this;
		let couponCode = e.target.value;
		self.setState({ couponCode : couponCode})
		
		if(couponCode.length < 6) {
			self.setState({ couponValidationState: null, couponValidationMessage: ''})
			return;
		}
		
		// valide coupon code
		if(couponCode.length == 6) {
			purchaseApi.validateCoupon(couponCode).then((data) => {
				if(data === true){
					self.setState({couponValidationState: 'success', couponValidationMessage: ''})
				} else {
					self.setState({ couponValidationState: 'error', couponValidationMessage: ''})
				}
			}).then((data)=> {
				
				// refresh price
				purchaseApi.getPrices(couponCode).then(function(data){
					self.setState({ prices: data })
				})

			});
		}
		
		/*purchaseApi.getCouponLink(curCp.id).then((data) => {
			self.setState({ couponLink: data})
		})*/
	}

	onCoinAmountChange(e, name){	
		this.setState({ 
			coinNum: e.target.value, 
			tokenNum:  e.target.value * this.state.curPrice.c2v 
		})
	}

	onTokenAmountChange(e, name){	
		this.setState({ 
			tokenNum: e.target.value, 
			coinNum: e.target.value * this.state.curPrice.v2c 
		})
	}

	handleCPHide = () => {
		this.setState({ showCPModal: false });
	}
	
	handleHide = () => {
		this.setState({ showModal: false });
	}

	jumpToVerif = () => {
		this.props.history.push('./verification')
	}

	logout = () => {
		localStorage.removeItem('token')
		this.props.history.push('./')
	}

	render() {
		const style = {
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
					paddingTop: '25px',
					height: '100%',
					display: 'InlineBlock',
				}
			},
		}
		const time = new Date();
		let dataToTime = <Moment>{time}</Moment>
		

		return (
			<div>
				<Row>
					<div style={style.menu}>
						<Col md={4} style={style.menu.logo} >
							<img src={Logo} alt="#"/>
						</Col>
						<Col mdOffset={4} md={2} style={style.menu.items} >
							{this.state.showLogout ? <div style={style.menu.item} className='app-btn f-right m-right-20 bold' onClick={this.logout}>LOGOUT</div> : null}
						</Col>
					</div>
				</Row>

				<Header/>

				<Row className="app-tab">
					<Col md={8} mdOffset={1}  xsOffset={1} xs={10}>
						<div className='left s-text m-bottom white bold'>PURCHASE TOKENS WITH</div>
						{
							this.state.currencies.map((v) => {
								return <div className="app-btn f-left" onClick={this.selectCurCoin.bind(this, v.symbol)}>{v.name}</div>
							})
						}
					</Col> 

					<Col md={3} mdOffset={0} xsOffset={1} xs={10}>
						<div className='left s-text m-bottom white bold'>VERIFY YOUR IDENTITY</div>
						<div className="app-btn f-left" onClick={this.jumpToVerif}>VERIFICATION</div>
					</Col> 
				</Row>

				<Row className="pur-main dark-grey">
					<Col>
						<Row className='of'>
							<Col 
							mdOffset={2} 
							md={4} 
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
							<div className='left'>Calculated on {dataToTime}</div>
							</Col>

							<Col mdOffset={0} md={4} xsOffset={1} xs={10} className='app-card'>
								<div className='left m-bottom'>
									<span className='pur-number left'>{this.state.curPrice.v2c}</span>
									{this.state.curPrice.name}
								</div>
								<div className='left bold'>{'1 ' + this.state.curPrice.name + ' = ' + this.state.curPrice.c2v + ' TOKEN'}</div>
								<div className='left'>Calculated on {dataToTime}</div>
							</Col>
						</Row>

						<Row className='of'>
							<Col mdOffset={2} md={8} xsOffset={1} xs={10} className='app-card'>	
								<Row>
										<Col md={5} className='m-bottom-20'>
											<FormGroup>
												<InputGroup bsSize="large">
													<InputGroup.Addon className='input-addon grey'>
														<i className="fa fa-globe ft-icon"></i>				
													</InputGroup.Addon>
													<FormControl 
													type="text" 
													className='input-basic'
													placeholder='TOKENS'
													value={ this.state.tokenNum }
													onChange={ (e) => this.onTokenAmountChange(e)}/>
												</InputGroup>
											</FormGroup>
										</Col>
										<Col className='m-top m-bottom-20' md={1}>
											Equals
										</Col>
										<Col md={6} className='m-bottom-20'>
											<FormGroup>
												<InputGroup bsSize="large">
													<InputGroup.Addon className='input-addon grey'>
														<i className="fa fa-usd ft-icon"></i>				
													</InputGroup.Addon>
													<FormControl type="text" className='input-basic' placeholder={ this.state.curPrice.name }
														value={ this.state.coinNum }
														onChange={ (e) => this.onCoinAmountChange(e) }/>
												</InputGroup>
											</FormGroup>
										</Col>
								</Row>

								<Row>
									<Col className='m-top black bold m-bottom-20' md={6}>
										<p>IF YOU HAVE GOT A COUPON, PLEASE INPUT YOUR CODE</p>
									</Col>
									<Col className='m-top m-bottom-20' md={6}>
										<FormGroup validationState={this.state.couponValidationState}>
											<InputGroup bsSize="large">
												<InputGroup.Addon className='input-addon grey'>
													<i className="fa fa-gift ft-icon"></i>
												</InputGroup.Addon>
												<FormControl 
													type="text" 
													className='input-basic'
													placeholder="Coupon Code"
													value={ this.state.couponCode }
													onChange={(e) => this.handleCouponChange(e)}/>
												<FormControl.Feedback />
											</InputGroup>
											<HelpBlock>{this.state.couponValidationMessage}</HelpBlock>
										</FormGroup>
									</Col>
								</Row>

								<Row>
									<Col className='m-top black bold m-bottom-20' md={6}>
										<p>
											PURCHASE {this.state.tokenNum} TOKENS USING { this.state.coinNum} { this.state.curPrice.name }
										</p>
									</Col>
									<Col className='m-top' md={5}>
										<div className="app-btn f-left app-btn-lg" onClick={this.purchaseToken.bind(this)}>PURCHASE</div>
									</Col>
								</Row>
							</Col>
						</Row>

						<Row className="pur-coins of">
							<Col mdOffset={1} md={2} xsOffset={2} xs={8} className="app-card f-left bg-light-blue white pur-l-card">
								<div className='n-text m-bottom'>Bitcoin</div>
								<div className='light'>$0.00 USD</div>
								<div className='light'> 0.00000000 Coins</div>
							</Col>
							<Col mdOffset={0} md={2} xsOffset={2} xs={8} className="app-card f-left bg-light-blue white pur-l-card">
								<div className='n-text m-bottom'>Ethereum</div>
								<div className='light'>$0.00 USD</div>
								<div className='light'>0.00000000 Coins</div>
							</Col>
						</Row>

						<Row className="pur-wallet of white">
							<Col md={10} mdOffset={1} xs={10} xsOffset={1} className="pur-l-card app-card bg-light-blue">
								<Row>
									<Col className='no-padding  m-bottom-0' md={1} xs={12}>
										<div className='bold b-text m-top-10'>12</div>
										<div className='light'>jan 2018</div>
									</Col>
									<Col className='no-padding left m-bottom-20 ' md={3} xs={12}>
										<div className='bold m-top-10'>PURCHASING USING FIAT</div>
										<div className='light'>2.00 USD</div>
									</Col>
									<Col className='no-padding left m-bottom-20' md={3} xs={12}>
										<div className='bold m-top-10'>UNFULFILLED</div>
										<div className='light'>No Blockchain Transaction</div>
									</Col>
									<Col className='no-padding left m-bottom-20' md={3} xs={12}>
										<div className='bold m-top-10'>NO TOKENS</div>
										<div className='light'>No Blockchain Transaction</div>
									</Col>
									<Col className='no-padding' md={2} xs={12} className='f-left bg-red pur-btn'>
										WALLET INFORMATION
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>

				<Modal
					show={this.state.showModal}
					onHide={this.handleHide}>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title" className='bold'>
							TRANSFER INFORMATION
						</Modal.Title>
					</Modal.Header>

					<Modal.Body className='pur-transfer'>
						<h4>Please scan this QRCode to contribute</h4>
						<div className="pur-transfer-qrcode"><QRCode value={ this.state.QRstr } /></div>
						<div className='bold'>{ this.state.QRstr }</div>
						<p className='pur-transfer-hint'>PURCHASE {this.state.tokenNum} TOKENS USING { this.state.coinNum} { this.state.curPrice.name }</p>
					</Modal.Body>

					<Modal.Footer>
						<Button onClick={ this.handleHide }>Close</Button>
					</Modal.Footer>
				</Modal>

				<Modal show={this.state.showInstructionModalWhenLogin}>
					<Modal.Header>
						<Modal.Title id="contained-modal-title" className='bold'>
							INSTRUCTIONS
						</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<Panel>
							<Panel.Body className="app-panel-body">
								<h4>PURCHASING TOKENS</h4>
								<p>To purchase tokens please select cryptocurrency you would like to use or select 'CURRENCY', to wire money via your bank, and then enter the number of tokens you want to purchase. A conversion will be presented to you. If you approve of the purchase, select the 'PURCHASE' button. A 'promise' will be entered on your behalf and will be displayed at the bottom of the page. You will then need to carry out the instructions that will be presented to you.</p>
							</Panel.Body>
						</Panel>
						<Panel>
							<Panel.Body className="app-panel-body">
								<h4>IDENTITY VERIFICATION</h4>
								<p>You are not required to verify your identity before purchasing tokens. However, before tokens will be delivered, you must verify your identity. You will have until February 28, 2018 to verify your identity.</p>
							</Panel.Body>
						</Panel>
					</Modal.Body>

					<Modal.Footer>
						<Button onClick={ () => { this.setState({showInstructionModalWhenLogin: false}) }}>Close</Button>
					</Modal.Footer>
				</Modal>

				<Modal
				show={this.state.showCPModal}
				onHide={this.handleCPHide}>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title" className='bold'>
							TRANSFER INFORMATION
						</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<p>Choose your coupon type:</p>
						<FormControl
							componentClass="select"
							className='input-noaddon'
							onChange={(e) => this.handleCouponChange(e)}>
							{
								this.state.coupons.map((c) => {
									return <option value={c}>{c.code}</option>
								})
							}
						</FormControl>
						<p>{this.state.curCp.description}</p>
						<p>{this.state.couponLink}</p>
						<FormControl
							type="text" 
							className='input-noaddon'
							value={this.state.sendEmail}
							onChange={(e) => this.handleChange(e, 'sendEmail')}
							>
						</FormControl>
					</Modal.Body>

					<Modal.Footer>
						<Button onClick={ this.handleCPHide }>Close</Button>
					</Modal.Footer>
				</Modal>

			</div>
		);
	}
}

export default Purchase;