import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './Home.css';
//components
import Verif from '../../components/Verif/Verif'
import Purchase from '../../components/Purchase/Purchase'
import Sign from '../../components/Sign/Sign'

class Home extends Component {
	constructor(){
		super();

		this.state = {
			flag: true
		}
	}

	logIn(){

	}

	signUp(){

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
					padding: '0px',
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
					height: '100%',
					width: '100px',
					float: 'right',
					display: 'InlineBlock',
				}
			},
			wrapper: {
				wall: {
					height: '300px'
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
					<Row className='no-margin'>
						<div style={style.menu}>
							<Col md={4} style={style.menu.logo} >
								VC Token
							</Col>
							<Col md={8} style={style.menu.items} >
								<Row>
									<Col md={2} style={style.menu.item}>
											1
									</Col>
									<Col md={2} style={style.menu.item}>
											2
									</Col>
									<Col md={2} style={style.menu.item}>
											3
									</Col>
									<Col md={2} style={style.menu.item}>
											4
									</Col>
									<Col md={2} style={style.menu.item}>
											5
									</Col>
									<Col md={2} style={style.menu.item}>
											6
									</Col>
								</Row>
							</Col>
						</div>
					</Row>
					{/***** wrapper *****/}
					{/***** wrapper *****/}
					{/***** wrapper *****/}
					<div style={style.wrapper}>
						{/***** wall *****/}
						{/***** wall *****/}
						{/***** wall *****/}
						<Row style={style.wall} className='no-margin'>
							<h2>PROGRESSIVE COIN SALES (BIQ)</h2>
							<p>PRE-ICO PROGRESSIVE COIN SALES (TOKENS)</p>
							<p>TIME LEFT IN PUBLIC PRE-ICO</p>
						</Row>
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