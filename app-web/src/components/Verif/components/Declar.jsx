import React, { Component } from 'react';

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

import { FormattedMessage } from 'react-intl';

import verifApi from '../api'



class Declar extends Component {
	constructor(props, context) {
		super(props, context);

		this.handleChange = this.handleChange.bind(this);

		this.state = {
			value: ''
		};
	}

	componentWillMount = () => {
		let self = this

		verifApi.getDeclarations().then(function (data) {
			self.setState({
				declaration1: data.declaration1,
				declaration2: data.declaration2,
				declaration3: data.declaration3
			})
		})
	}

	getValidationState() {
		const length = this.state.value.length;
		if (length > 10) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
		return null;
	}

	uploadDeclarations() {
		let data = {
			declaration1: this.state.declaration1,
			declaration2: this.state.declaration2,
			declaration3: this.state.declaration3
		}

		verifApi.uploadDeclarations(data)
			.then((data) => {
				console.log(data)
			})
	}

	handleChange(e, key) {
		this.setState({ [key]: e.target.value });
	}

	render() {
		return (
			<Row className="ver-declar of no-margin">
				<Col mdOffset={2} md={8} xsOffset={1} xs={10} className='app-card'>
					<Row className="b-text black left m-bottom-40 no-margin">
						<Col>
							<FormattedMessage id='declar.title' defaultMessage='Declarations' />
						</Col>
					</Row>

					<Row className="no-margin">
						<Col md={6} xs={12}>
							<Col className='left p-r-50 m-bottom-20' >
								<FormGroup
									controlId="formBasicText"
									validationState={this.getValidationState()}>
									<FormControl
										componentClass="select"
										className='input-noaddon'
										value={this.state.declaration1}
										onChange={(e) => this.handleChange(e, 'declaration1')}>
										<option value="select">
											<FormattedMessage id='declar.d1.1' defaultMessage='' />
										</option>
										<option>
											<FormattedMessage id='declar.d1.2' defaultMessage='' />
										</option>
										<option>
											<FormattedMessage id='declar.d1.3' defaultMessage='' />
										</option>
									</FormControl>
								</FormGroup>
							</Col>

							<Col className='left p-r-50 m-bottom-20' >
								<FormGroup controlId="formBasicText" validationState={this.getValidationState()} >
									<FormControl componentClass="select"
										className='input-noaddon'
										value={this.state.declaration2}
										onChange={(e) => this.handleChange(e, 'declaration2')}>
										<option value="select">
											<FormattedMessage id='declar.d2.1' defaultMessage='Select Declaration #2' />
										</option>
										<option>
											<FormattedMessage id='declar.d2.2' defaultMessage='I am a U.S. resident alien' />
										</option>
										<option>
											<FormattedMessage id='declar.d2.3' defaultMessage='I am not a U.S. resident alien' />
										</option>
									</FormControl>
								</FormGroup>
							</Col>

							<Col className='left p-r-50 m-bottom-20' >
								<FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
									<FormControl componentClass="select"
										className='input-noaddon'
										value={this.state.declaration3}
										onChange={(e) => this.handleChange(e, 'declaration3')}>
										<option value="select">
											<FormattedMessage id='declar.d3.1' defaultMessage='Select Declaration #3' />
										</option>
										<option>
											<FormattedMessage id='declar.d3.2' defaultMessage='I am a U.S. tax person for any other reason' />
										</option>
										<option>
											<FormattedMessage id='declar.d3.3' defaultMessage='I am not a U.S. tax person for any other reason' />
										</option>
									</FormControl>
								</FormGroup>
							</Col>
						</Col>

						<Col md={6} xs={12}>
							<p className='black left'>
								<FormattedMessage id='declar.other' defaultMessage='Under the Foreign Account Tax Compliance Act (FATCA) foreign financial institutions are obligated to report financial accounts held by U.S. taxpayers or foreign entities in which U.S. taxpayers hold a substantial ownership interest.' />
							</p>
						</Col>
					</Row>
				</Col>

				<Col mdOffset={7} md={3} xsOffset={1} xs={10}>
					<div className='verif-save-btn app-btn white m-bottom-40' onClick={this.uploadDeclarations.bind(this)}>
						<FormattedMessage id='verif.save' defaultMessage='SAVE SECTION' />
					</div>
				</Col>
			</Row>
		)
	}
}

export default Declar