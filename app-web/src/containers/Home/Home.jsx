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
import Img from '../../vendor/img/background-dark.png'

class Home extends Component {
	constructor(){
		super();
	}

	render() {
		const style = {
			backgroundImage: "url(" + Img+ ")",
			// backgroundSize: 'contain',
			// backgroundPosition: 'bottom'
			backgroundRepeat: 'round'
		}

		return (
			<Grid fluid className='no-padding' style={style}>
				<HomeRoute/>
				<Footer/>
			</Grid>
		);
  }
}

export default Home;