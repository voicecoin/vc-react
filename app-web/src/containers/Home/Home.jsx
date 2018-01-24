import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
//components
import Verif from '../../components/Verif/Verif'
import Purchase from '../../components/Purchase/Purchase'
import Sign from '../../components/Sign/Sign'
//style
import './Home.css';
import Img from '../../vendor/img/vc.jpg'

class Home extends Component {
	constructor(){
		super();

		this.state = {
			flag: true
		}
	}

	changeMainTab(){

	}


	render() {
		let content;
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
			},
			wrapper: {
				paddingBottom: '30px',
				color: '#fff',
				backgroundImage: "url(" + Img+ ")",
				backgroundSize: 'cover',
				content: {
					marginBottom: '50px'
				},
				main: {
	
				}
			}
		}

		if(this.state.flag){
			content = <Purchase
						switch={this.changeMainTab}
					/>
		}else{
			content = <Verif
						switch={this.changeMainTab}
					/>
		}
		

		return (
			<div>
				{/***** menu *****/}
				{/***** menu *****/}
				{/***** menu *****/}
				{/***** menu *****/}
				{/***** menu *****/}
				<Row className='no-margin'>
					<div style={style.menu}>
						<Col md={4} style={style.menu.logo} >
							VC Token
						</Col>
						<Col mdOffset={2} md={6} style={style.menu.items} >

							<Col md={2} style={style.menu.item}>
								About
							</Col>
							<Col md={2} style={style.menu.item}>
								Service
							</Col>
							<Col md={2} style={style.menu.item}>
								Pricing
							</Col>
							<Col md={2} style={style.menu.item}>
								FAQ
							</Col>

						</Col>
					</div>
				</Row>
				{/***** wrapper *****/}
				{/***** wrapper *****/}
				{/***** wrapper *****/}
				{/***** wrapper *****/}
				{/***** wrapper *****/}
				<div style={style.wrapper}>
					<Row style={style.wrapper.content} className='no-margin'>
						<Col mdOffset={2} md={8}>
							<p className='h-wrapper-header'>PROGRESSIVE COIN SALES (BIQ)</p>
							<div className="h-wrapper-progress">
								<div className="progress-bar">
									<div className="raiseAmount">
									</div>
								</div>
							</div>
							<p className='h-wrapper-text'>PRE-ICO PROGRESSIVE COIN SALES (TOKENS)</p>
							<div className="h-countdown">
								countdown
							</div>
							<p className='h-wrapper-text'>TIME LEFT IN PUBLIC PRE-ICO</p>
						</Col>
					</Row>
					{/***** main *****/}
					{/***** main *****/}
					{/***** main *****/}
					{/***** main *****/}
					{/***** main *****/}
					<Row style={style.main} className='no-margin'>

						<Sign/>
						
					</Row>
				</div>	
			</div>
		);
  }
}

export default Home;