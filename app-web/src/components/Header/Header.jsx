import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Countdown from '../Countdown/Countdown'

import headerApi from './api'
//style
import './Header.css';
import Img from '../../vendor/img/vc.jpg'

class Header extends Component {
    constructor(){
		super();

		this.state = {
			info: {},
		}

		let self = this
		headerApi.getIcoInfo().then(function(data){
			console.log(data)
			self.setState({
				info: data
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
                paddingBottom: '50px',
				content: {
					marginBottom: '50px'
				}
			}
		}

        return (
            <div>
				<div style={style.wrapper}>
					{/***** content *****/}
					{/***** content *****/}
					{/***** content *****/}
					<Row style={style.wrapper.content} className='no-margin'>
						<Col mdOffset={3} md={6}>
							<p className='h-wrapper-header'>PROGRESSIVE COIN SALES (BIQ)</p>

							<div className="h-wrapper-progress">
								<div className="progress-bar">
									<div className="raiseAmount">
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