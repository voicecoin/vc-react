import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
//router
import HomeRoute from './router'
//components
import Verif from '../../components/Verif/Verif'
import Purchase from '../../components/Purchase/Purchase'
import Sign from '../../components/Sign/Sign'
import Footer from '../../components/Footer/Footer'

//style
import './Home.css';
import Img from '../../vendor/img/vc.jpg'

class Home extends Component {
	constructor(){
		super();
	}

	render() {
		const style = {
			backgroundImage: "url(" + Img+ ")",
			backgroundSize: 'cover',
		}

		return (
			<div style={style}>
				<HomeRoute/>	
				<Footer/>
			</div>
		);
  }
}

export default Home;