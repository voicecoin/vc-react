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
import DatePicker from 'react-datepicker';
import moment from 'moment';

import verifApi from '../api'

import 'react-datepicker/dist/react-datepicker.css';

class Declar extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			firstName: '',
			lastName: '',
			address: {
				addressLine1: '',
				zipcode: '',
				city: '',
				county: '',
				state: '',
				country: ''
			},
			nationality: '',
			birthday: null,
			countries: [],
			states: [],
			nationalities: []
		};
	}

	componentWillMount = () => {
		let self = this

		verifApi.getPersonalInformation().then(function (data) {
			self.setState({ firstName: data.firstName })
			self.setState({ lastName: data.lastName })
			if (data.birthday) {
				self.setState({ birthday: moment(data.birthday) })
			}
			self.setState({ address: data.address })
			self.setState({ nationality: data.nationality })

			verifApi.getStates(data.address.country).then(function (data) {
				self.setState({ states: data.items })
			})
		})

		verifApi.getCountries().then(function (data) {
			self.setState({ countries: data.items });
			self.setState({ nationalities: data.items.map(x => x.nationality) });
		})
	}

	getValidationState(property) {
		const length = property.length;
		if (length > 2) return 'success';
		else if (length > 1) return 'warning';
		else if (length > 0) return 'error';
		return null;
	}

	handleChange(e, key, per) {
		this.setState({ [key]: e.target.value });
	}

	handleAddressChange(e, key, per) {
		var address = Object.assign({}, this.state.address, { [key]: e.target.value });
		this.setState({ address: address });
	}

	handleChangeOnCountry(e) {
		let self = this
		let country = e.target.value
		var address = Object.assign({}, this.state.address, { country: e.target.value });
		this.setState({ address: address });
		verifApi.getStates(country).then(function (data) {
			self.setState({ states: data.items })
		})
	}

	uploadPersonalInformation() {
		let data = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			address: this.state.address,
			nationality: this.state.nationality,
			birthday: this.state.birthday
		}

		verifApi.uploadPersonalInformation(data)
			.then((data) => {
				console.log(data)
			})
	}

	setBirthday(d) {
		this.setState({ birthday: d });
	}

	render() {
		return (
			<Row className="ver-perinfo of no-margin">
				<Col mdOffset={2} md={8} xsOffset={1} xs={10} className='app-card'>
					<Row className="no-margin">
						<Col className="b-text black left m-bottom-40">
							<FormattedMessage id='personal.title' defaultMessage='Personal Information' />
						</Col>
					</Row>

					<Row>
						<Col md={6} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup controlId="formBasicText" validationState={this.getValidationState(this.state.firstName)}>
								<ControlLabel className='grey m-bottom'>
									<FormattedMessage id='personal.givenName' defaultMessage='GIVEN NAME' />
								</ControlLabel>
								<FormControl
									type="text"
									value={this.state.firstName}
									placeholder="GIVEN NAME"
									onChange={(e) => this.handleChange(e, 'firstName')}
									className='input-noaddon' />
								<HelpBlock></HelpBlock>
							</FormGroup>
						</Col>

						<Col md={6} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup controlId="formBasicText" validationState={this.getValidationState(this.state.lastName)}>
								<ControlLabel className='grey m-bottom '>
									<FormattedMessage id='personal.surname' defaultMessage='SURNAME' />
								</ControlLabel>
								<FormControl
									type="text"
									value={this.state.lastName}
									placeholder="SURNAME"
									onChange={(e) => this.handleChange(e, 'lastName')}
									className='input-noaddon'
								/>
								<HelpBlock></HelpBlock>
							</FormGroup>
						</Col>

						<Col md={12} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup controlId="formBasicText" >
								<ControlLabel className='grey m-bottom '>
									<FormattedMessage id='personal.addr1' defaultMessage='ADDRESS LINE 1' />
								</ControlLabel>
								<FormControl
									type="text"
									value={this.state.address.addressLine1}
									placeholder="Address"
									onChange={(e) => this.handleAddressChange(e, 'addressLine1')}
									className='input-noaddon'
								/>
								<HelpBlock></HelpBlock>
							</FormGroup>
						</Col>

						<Col md={12} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup controlId="formBasicText" >
								<ControlLabel className='grey m-bottom '>
									<FormattedMessage id='personal.addr2' defaultMessage='ADDRESS LINE 2' />
								</ControlLabel>
								<FormControl
									type="text"
									value={this.state.address.addressLine2}
									placeholder="APT#"
									onChange={(e) => this.handleAddressChange(e, 'addressLine2')}
									className='input-noaddon'
								/>
								<HelpBlock></HelpBlock>
							</FormGroup>
						</Col>

						<Col md={6} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup controlId="formBasicText" >
								<ControlLabel className='grey m-bottom '>
									<FormattedMessage id='personal.zipcode' defaultMessage='POSTAL CODE' />
								</ControlLabel>
								<FormControl
									type="text"
									value={this.state.address.zipcode}
									placeholder="Zipcode"
									onChange={(e) => this.handleAddressChange(e, 'zipcode')}
									className='input-noaddon'
								/>
								<HelpBlock></HelpBlock>
							</FormGroup>
						</Col>

						<Col md={6} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup controlId="formBasicText">
								<ControlLabel className='grey m-bottom '>
									<FormattedMessage id='personal.city' defaultMessage='CITY' />
								</ControlLabel>
								<FormControl
									type="text"
									value={this.state.address.city}
									placeholder="City"
									onChange={(e) => this.handleAddressChange(e, 'city')}
									className='input-noaddon' />
								<HelpBlock></HelpBlock>
							</FormGroup>
						</Col>

						<Col md={6} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup controlId="formBasicText">
								<ControlLabel className='grey m-bottom'>
									<FormattedMessage id='personal.country' defaultMessage='COUNTRY' />
								</ControlLabel>
								<FormControl
									componentClass="select"
									className='input-noaddon'
									value={this.state.address.country}
									onChange={(e) => this.handleChangeOnCountry(e)}>
									<option value="select">
										<FormattedMessage id='verif.select' defaultMessage='select' />
									</option>
									{
										this.state.countries.map((c) => {
											return <option value={c.code}>{c.name}</option>
										})
									}
								</FormControl>
							</FormGroup>
						</Col>

						<Col md={6} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup
								controlId="formBasicText">
								<ControlLabel className='grey m-bottom' >
									<FormattedMessage id='personal.state' defaultMessage='STATE' />
								</ControlLabel>
								<FormControl
									componentClass="select"
									className='input-noaddon'
									value={this.state.address.state}
									onChange={(e) => this.handleAddressChange(e, 'state')}>
									<option value="select">
										<FormattedMessage id='verif.select' defaultMessage='select' />
									</option>
									{
										this.state.states.map((c) => {
											return <option value={c.abbr}>{c.name}</option>
										})
									}
								</FormControl>
							</FormGroup>
						</Col>

						<Col md={6} xs={12} className='left p-r-50 m-bottom-40' >
							<FormGroup controlId="formBasicText">
								<ControlLabel className='grey m-bottom'>
									<FormattedMessage id='personal.nation' defaultMessage='NATIONALITY' />
								</ControlLabel>
								<FormControl
									componentClass="select"
									className='input-noaddon'
									value={this.state.nationality}
									onChange={(e) => this.handleChange(e, 'nationality')}>
									<option value="select">
										<FormattedMessage id='verif.select' defaultMessage='select' />
									</option>
									{
										this.state.nationalities.map((c) => {
											return <option value={c}>{c}</option>
										})
									}
								</FormControl>
							</FormGroup>
						</Col>

						<Col md={6} xs={12} className='left m-bottom-40' >
							<FormGroup controlId="formBasicText">
								<ControlLabel className='grey m-bottom '>
									<FormattedMessage id='personal.birthday' defaultMessage='BIRTH DATE' />
								</ControlLabel>
								<DatePicker peekNextMonth
									showMonthDropdown
									showYearDropdown
									dropdownMode="select"
									selected={this.state.birthday}
									onChange={(d) => this.setBirthday(d)}
									className="form-control" />
							</FormGroup>
						</Col>
					</Row>
				</Col>

				<Col mdOffset={7} md={3} xsOffset={1} xs={10}>
					<div className='verif-save-btn app-btn white m-bottom-40' onClick={this.uploadPersonalInformation.bind(this)}>
						<FormattedMessage id='verif.save' defaultMessage='SAVE SECTION' />
					</div>
				</Col>
			</Row>
		)
	}
}

export default Declar