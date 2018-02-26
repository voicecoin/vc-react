import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// COMPONENT
import Countdown from '../Countdown/Countdown'
// SERVICES
import headerApi from './api'
// STYLE
import './Header.css';
import Img from '../../vendor/img/background.png'

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
					<Row style={style.wrapper.content} className='no-margin'>
						<Col mdOffset={3} md={6} >
							<p className='h-wrapper-header'>PROGRESSIVE COIN SALES (VC)</p>
							<div className="h-wrapper-progress ">
								<div className='main-bg-color f-left' style={style.progressBar}>
									<div style={ style.raiseAmount } className="raiseAmount main-bg-color">
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