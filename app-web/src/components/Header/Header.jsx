import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
//component
import Countdown from '../Countdown/Countdown'
//api
import headerApi from './api'
//style
import './Header.css';
import Img from '../../vendor/img/vc.jpg'

class Header extends Component {
    constructor(){
		super();

		this.state = {
			info: {},
			barWidth: '',
		}

		let self = this
		headerApi.getIcoInfo().then(function(data){
			console.log(data)
			self.setState({
				info: data
			})
			self.setState({
				barWidth: data.percent
			})
        })
	}

    logout = () => {
        this.props.history.push('./')
    }


    render(){
		
		const style = {
            wrapper: {
				color: '#fff',
                paddingBottom: '30px',
				content: {
					
				}
			},
			
			progressBar: {
				display: 'inline-block',
				position: 'relative !important',
				width: this.state.barWidth,
				height: '20px'
			},

		}

        return (
            <div>
				<div style={style.wrapper}>
					{/***** content *****/}
					{/***** content *****/}
					{/***** content *****/}
					<Row style={style.wrapper.content} className='no-margin'>
						<Col mdOffset={3} md={6} >
							<p className='h-wrapper-header'>PROGRESSIVE COIN SALES (BIQ)</p>
							<div className="h-wrapper-progress ">
								<div className='bg-blue f-left' style={style.progressBar}>
									<div style={ style.raiseAmount } className="raiseAmount bg-blue">
										<p className='raise-number n-text'>{this.state.info.sold}</p>
									</div>
								</div>
							</div>

							<p className='h-wrapper-text'>PRE-ICO PROGRESSIVE COIN SALES (TOKENS)</p>
							<div className="h-countdown">
								<Countdown endDate={this.state.info.startDate}/>
							</div>
							<p className='h-wrapper-text center'>TIME LEFT IN PUBLIC PRE-ICO</p>
						</Col>
					</Row>
				</div>
            </div>
        )
    }
}

export default Header