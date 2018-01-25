import React, { Component } from 'react';

import { Row, 
	Col,
	form, 
	FormGroup,
	FormControl, 
	InputGroup, 
	Glyphicon, 
} from 'react-bootstrap';

import './Purchase.css';

class Purchase extends Component {
  render() {
	const style={
		text:{
			marginBottom: '10px'
		}
	}

    return (
      <div>
        <div className="pur-tab">
			<Col md={8} mdOffset={1}  xsOffset={1} xs={10}>
				<div className='left s-text'>PURCHASE TOKENS WITH</div>
				<div className="app-btn f-left">BITCOIN</div>
				<div className="app-btn f-left">LITECOIN</div>
				<div className="app-btn f-left">RIPPLE</div>
				<div className="app-btn f-left">FLAT</div>
			</Col> 

			<Col md={3} mdOffset={0} xsOffset={1} xs={10}>
				<div className='left s-text'>VERIFY YOUR IDENTITY</div>
				<div className="app-btn f-left bg-red">VERIFICATION</div>
			</Col> 
		</div>

		<div className="pur-main dark-grey">
			<div className='of'>
				<Col 
				mdOffset={1} 
				md={5} 
				xsOffset={1} 
				xs={10}
				className='app-card'>
					<div>
						<span>1</span>
						TOKEN
					</div>
					<div>1 TOKEN = 0.00008801 BTC</div>
					<div>Calculated on January 24, 2018, 20:30 (1/25/2018, 02:30 UTC)</div>
				</Col>

				<Col mdOffset={0} md={5} xsOffset={1} xs={10} className='app-card'>
					<div>
						<span>1</span>
						TOKEN
					</div>
					<div>1 TOKEN = 0.00008801 BTC</div>
					<div>Calculated on January 24, 2018, 20:30 (1/25/2018, 02:30 UTC)</div>
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
					<Col md={3}>
						<InputGroup bsSize="large">
							<InputGroup.Addon className='input-addon grey'>
								<Glyphicon glyph="pencil"/>				
							</InputGroup.Addon>
							<FormControl type="text" className='input-basic'/>
						</InputGroup>
					</Col>
					<Col md={1}>
						or
					</Col>
					<Col md={3}>
						<InputGroup bsSize="large">
							<InputGroup.Addon className='input-addon grey'>
								<Glyphicon glyph="pencil"/>				
							</InputGroup.Addon>
							<FormControl type="text" className='input-basic'/>
						</InputGroup>
					</Col>
					<Col md={5}>
						PURCHASE TOKENS USING 0.00000000 BTC
					</Col>

					<Col mdOffset={8} md={4}>
						<div className="app-btn f-left">FLAT</div>
					</Col>
				</Col>
			</div>

			<div className="pur-coins of">
				<Col mdOffset={1} md={2} xsOffset={2} xs={8} className="app-card f-left bg-light-blue white pur-l-card">
					<div>Bitcoin</div>
					<div>$0.00 USD</div>
					<div>0.00000000 Coins</div>
				</Col>
				<Col mdOffset={0} md={2} xsOffset={2} xs={8} className="app-card f-left bg-light-blue white pur-l-card">
					<div>Bitcoin</div>
					<div>$0.00 USD</div>
					<div>0.00000000 Coins</div>
				</Col>
				<Col mdOffset={0} md={2} xsOffset={2} xs={8} className="app-card f-left bg-light-blue white pur-l-card">
					<div>Bitcoin</div>	
					<div>$0.00 USD</div>
					<div>0.00000000 Coins</div>
				</Col>
				<Col mdOffset={0} md={2} xsOffset={2} xs={8} className="app-card f-left bg-light-blue white pur-l-card">
					<div>Bitcoin</div>
					<div>$0.00 USD</div>
					<div>0.00000000 Coins</div>
				</Col>
				<Col mdOffset={0} md={2} xsOffset={2} xs={8} className="app-card f-left bg-light-blue white pur-l-card">
					<div>Bitcoin</div>
					<div>$0.00 USD</div>
					<div>0.00000000 Coins</div>
				</Col>
			</div>

			<div className="pur-wallet of white">
				<Col md={10} mdOffset={1} xs={10} xsOffset={1} className="pur-l-card app-card bg-light-blue">
					<Col className='no-padding' md={1} xs={12}>
						<div>12</div>
						<div>jan 2018</div>
					</Col>
					<Col className='no-padding' md={3} xs={12}>
						<div>PURCHASING USING FIAT</div>
						<div>2.00 USD</div>
					</Col>
					<Col className='no-padding' md={3} xs={12}>
						<div>UNFULFILLED</div>
						<div>No Blockchain Transaction</div>
					</Col>
					<Col className='no-padding' md={3} xs={12}>
						<div>NO TOKENS</div>
						<div>No Blockchain Transaction</div>
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