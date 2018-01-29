import React, { Component } from 'react';

import { Row, 
	Col,
	form, 
	FormGroup,
	FormControl, 
	InputGroup, 
	Glyphicon,
	ControlLabel,
	HelpBlock
} from 'react-bootstrap';

import { faCoffee } from '@fortawesome/fontawesome-free-solid'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import './Footer.css'

class Footer extends Component {
	constructor() {
		super();
	}

	render(){
		return (
            <div>
                <div className='of bg-l-black p-t-50'>
                    <Col 
                    mdOffset={1} 
                    md={10} 
                    xs={12}
                    className='ft-wrapper left white'>
                        <Col md={3} xs={12} className='p-r-50 m-bottom-60'>
                            <h4 className='m-bottom-20'>ABOUT US</h4>
                            <div className='ft-s-line m-bottom-40'></div>
                            <p>The first decentralized digital currency to be backed by a financial guarantee that scales with the size of the ICO, built on a proven infrastructure, with an equitable revenue share structure, all designed to optimize and implement the goals of the global financial revolution. The future has arrived.</p>
                        </Col>
                        <Col md={3} xs={12} className='p-r-50 m-bottom-60'>
                            <h4 className='m-bottom-20'>PAPPERS</h4>
                            <div className='ft-s-line m-bottom-40'></div>
                            <div className='m-bottom-10'>Teaser</div>
                            <div className='ft-l-line m-bottom-10'></div>
                            <div className='m-bottom-10'>Primer</div>
                            <div className='ft-l-line m-bottom-10'></div>
                            <div className='m-bottom-10'>Proof of Majority</div>
                            <div className='ft-l-line m-bottom-10'></div>
                        </Col>
                        <Col md={3} xs={12} className='p-r-50 m-bottom-60'>
                            <h4 className='m-bottom-20'>DOCUMENTS</h4>
                            <div className='ft-s-line m-bottom-40'></div>
                            <div className='m-bottom-10'>White Papper</div>
                            <div className='ft-l-line m-bottom-10'></div>
                            <div className='m-bottom-10'>SAFT</div>
                            <div className='ft-l-line m-bottom-10'></div>
                        </Col>
                        <Col md={3} xs={12} className='p-r-50 m-bottom-60'>
                            <h4 className='m-bottom-20'>CONTACT</h4>
                            <div className='ft-s-line m-bottom-40'></div>
                            <div className='m-bottom-20'>
                                <p>Suite 1, Burns House</p>
                                <p>19 Town Range, Gibraltar</p>
                            </div>

                            <div className='m-bottom-20'>
                                <p>info@voic.com</p>
                                <p>www.voic.com</p>
                            </div>
                        </Col>
                    </Col>
                </div>
                <div className='of bg-black'>
                    <Col
                    mdOffset={1} 
                    md={10} 
                    xs={12}
                    className='white bg-black'>
                        <Col 
                        md={8} 
                        xs={12}>
                            <h5 className='m-bottom-20 left'>VOIC Limited, 2017-2018 © All Rights Reserved. Privacy Policy  |  Terms of Use</h5>
                        </Col>
                        <Col
                        md={4} 
                        xs={12}>
                        </Col>
                    </Col>
                </div>
            </div>

		)
	}
}

export default Footer