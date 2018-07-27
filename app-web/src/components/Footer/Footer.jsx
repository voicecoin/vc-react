import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import {
	Row,
	Col,
	form,
	FormGroup,
	FormControl,
	InputGroup,
	Glyphicon,
	ControlLabel,
	HelpBlock
} from 'react-bootstrap';
import './Footer.css'
import 'font-awesome/css/font-awesome.min.css';

class Footer extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<Row className='no-margin of bg-white-half p-t-50'>
					<Col
						mdOffset={1}
						md={10}
						xs={12}
						className='ft-wrapper left white'>
						<Col md={3} xs={12} className='p-r-50 m-bottom-60'>
							<h4 className='m-bottom-20'>
								<FormattedMessage id='footer.aboutus' defaultMessage='ABOUT US' />
							</h4>
							<div className='ft-s-line m-bottom-40'></div>
							<p>
								<FormattedMessage id='footer.description' defaultMessage='Voiceweb blockchain works for decentralized voice internet,  blockchain and artificial intelligence technologies. Next generation world wide web.' />
							</p>
						</Col>
						<Col md={3} xs={12} className='p-r-50 m-bottom-60'>
							<h4 className='m-bottom-20'>
								<FormattedMessage id='footer.papers' defaultMessage='PAPERS' />
							</h4>
							<div className='ft-s-line m-bottom-40'></div>
							<div className='m-bottom-10'>
								<FormattedMessage id='footer.teaser' defaultMessage='Teaser' />
							</div>
							{/*<div className='ft-l-line m-bottom-10'></div>
							<div className='m-bottom-10'>
								<FormattedMessage id='footer.primer' defaultMessage='Primer' />
							</div>
							<div className='ft-l-line m-bottom-10'></div>
							<div className='m-bottom-10'>
								<FormattedMessage id='footer.proofofmajority' defaultMessage='Proof of Majority' />
							</div>
							<div className='ft-l-line m-bottom-10'></div>*/}
						</Col>
						<Col md={3} xs={12} className='p-r-50 m-bottom-60'>
							<h4 className='m-bottom-20'>
								<FormattedMessage id='footer.documents' defaultMessage='DOCUMENTS' />
							</h4>
							<div className='ft-s-line m-bottom-40'></div>
							<div className='m-bottom-10'><a href="https://www.voicechain.io/doc/Voicecoin_Whitepaper.pdf" target="_blank" className="white">
								<FormattedMessage id='footer.whitepaper' defaultMessage='White Paper' />
							</a></div>
							<div className='m-bottom-10 white'><a href="/Voiceweb Gist.pdf" target="_blank" className="white">
								<FormattedMessage id='footer.gist' defaultMessage='GIST' />
							</a></div>
						</Col>
						<Col md={3} xs={12} className='p-r-50 m-bottom-60'>
							<h4 className='m-bottom-20'>
								<FormattedMessage id='footer.contact' defaultMessage='CONTACT' />
							</h4>
							<div className='ft-s-line m-bottom-40'></div>
							<div className='m-bottom-20'>
								<p></p>
								<p></p>
							</div>

							<div className='m-bottom-20'>
								<p><a href="mailto:support@voicecoin.com" className="white">support@voiccoin.com</a></p>
								<p><a href="https://voicecoin.io" className="white" target="_blank">https://voicecoin.io</a></p>
							</div>
						</Col>
					</Col>
				</Row>
				<Row className='no-margin of'>
					<Col mdOffset={1} md={10} xs={12} className='white'>
						<Col md={8} xs={12}>
							<h5 className='m-top-20 m-bottom-20 left footer-copyright'>
								© 2017-2018 <a href="http://www.voiceweb.com" className="white" target="_blank">
									<FormattedMessage id='footer.voiceweb' defaultMessage='Voiceweb Foundation' />
								</a> &nbsp;
								<FormattedMessage id='footer.copyright' defaultMessage='All Rights Reserved.' /> |&nbsp;
								<FormattedMessage id='footer.privacy' defaultMessage='Privacy Policy' /> |&nbsp;
								<FormattedMessage id='footer.termsofuse' defaultMessage='Terms of Use' />
							</h5>
						</Col>
						<Col className='ft-icons' md={2} xs={12}>
							<a href="https://t.me/voicecoin" target="_blank" className="white"><i className="fa fa-telegram ft-icon"></i></a>
							<a href="https://twitter.com/voicecoin" target="_blank" className="white"><i className="fa fa-twitter ft-icon"></i></a>
							<a href="https://www.linkedin.com/company/voicecoin" target="_blank" className="white"><i className="fa fa-linkedin ft-icon"></i></a>
							<a href="https://www.facebook.com/voicewebcoin" target="_blank" className="white"><i className="fa fa-facebook ft-icon"></i></a>
						</Col>
					</Col>
				</Row>
			</div>

		)
	}
}

export default Footer