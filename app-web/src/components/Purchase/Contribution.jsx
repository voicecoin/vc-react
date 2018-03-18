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
//components
//services
import purchaseApi from '../Purchase/api'
//styling
import './Purchase.css';

class Contribution extends Component {
	constructor(){
		super()

		this.state = {
			currencies: [],
			purchases: [],
			contri: {},
			contributionStat: []
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

		purchaseApi.getContributionStat().then((data) => {
			self.setState({ contributionStat: data })
		})

		purchaseApi.getPurchases().then((data) => {
			self.setState({ purchases: data })
		})
	}

	componentDidMount(){
		console.log(this.props.num)
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

		return (
			<div>
				<Row className="no-margin pur-coins of">
					<Col md={8} mdOffset={2} xs={12} className='no-padding'>
					{
						this.state.contributionStat.length !== 0 ? this.state.contributionStat.items.map((s) => {
						return (
							<Col md={3} mdOffset={0} xs={8} xsOffset={2} className="app-card-s app-card f-left main-bg-color-light white pur-l-card m-right-20">
								<div className='n-text m-bottom-10'>{s.currency}</div>
								<div className='light m-bottom-10'>${s.amountUsd} USD</div>
								<div className='light'> {s.amount} Coins</div>
							</Col>
						)
						}) : null
					}
					</Col>
				</Row>

				<Row className="no-margin pur-wallet of white">
					<Col md={8} mdOffset={2} xs={10} xsOffset={1} className="pur-l-card app-card main-bg-color-light">
					{
						this.state.purchases.length > 0 ? this.state.purchases.map((s) => {
						return (
									<Row className="no-margin">
									<Col className='no-padding  m-bottom-0' md={2} xs={12}>
										<div className='bold b-text m-top-10'><Moment format="DD">{s.updatedTime}</Moment></div>
										<div className='light'><Moment format="MMMM, YYYY">{s.updatedTime}</Moment></div>
									</Col>
									<Col className='no-padding left m-bottom-20 ' md={4} xs={12}>
										<div className='bold m-top-10'>PURCHASING USING {s.currency}</div>
										<div className='light'>{s.amount} {s.currency}</div>
									</Col>
									<Col className='no-padding left m-bottom-20' md={4} xs={12}>
										<div className='bold m-top-10'>{s.status.toUpperCase()}</div>
										<div className='light'>{s.tokenAmount} TOKENS</div>
									</Col>
									<Col className='no-padding' md={2} xs={12} className='f-left bg-red pur-btn'>
										WALLET INFORMATION
									</Col>
								</Row>
							)
						}) : null
					}

					</Col>
				</Row>
			</div>
		);
	}
}

export default Contribution;