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
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';
//SERVICE
import verifApi from '../api'

class Declar extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			firstName: '',
			lastName:'',
			address: {
				addressLine1: '',
				zipcode: '',
				city: '',
				county: '',
				state: '',
				country: ''
			},
			nationality: '',
			birthday: moment(),
			countries: [],
			states: [],
			nationalities: []
		};
	}

	componentWillMount = () => {
		let self = this
		verifApi.getCountries().then(function(data){
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
		this.setState({ address: {[key]: e.target.value }});
	  }

	handleChangeOnCountry(e) {
		let self = this
		let country = e.target.value
		this.setState({ country: country });
		verifApi.getStates(country).then(function(data){
			self.setState({ states: data.items })
		})
	  }

	uploadPersonalInformation() {
		let data = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			address: this.state.address,
			nationality: this.state.nationality,
			birthday: this.state.birthday,
			month: this.state.month,
			day: this.state.day
		}

		verifApi.uploadPersonalInformation(data)
		.then((data) => {
			console.log(data)
		})
	}

	setBirthday(d) {
		console.log(d)
		this.setState({ birthday: d });
	}

	render(){
		return (
      <Row className="ver-perinfo of no-margin">
				<Col mdOffset={2} md={8} xsOffset={1} xs={10} className='app-card'>
					<Row className="no-margin">
						<Col className="b-text black left m-bottom-40">Personal Information</Col>
					</Row>

					<Row>
						<Col md={6} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup controlId="formBasicText" validationState={this.getValidationState(this.state.firstName)}>
								<ControlLabel className='grey m-bottom '>GIVEN NAME</ControlLabel>
								<FormControl
									type="text"
									value={this.state.firstName}
									placeholder="GIVEN NAME"
									onChange={(e) => this.handleChange(e, 'firstName')}
									className='input-noaddon'/>
								<FormControl.Feedback />
								<HelpBlock></HelpBlock>
							</FormGroup>
						</Col>
						
						<Col md={6} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup controlId="formBasicText" validationState={this.getValidationState(this.state.lastName)}>
								<ControlLabel className='grey m-bottom '>SURNAME</ControlLabel>
								<FormControl
									type="text"
									value={this.state.lastName}
									placeholder="SURNAME"
									onChange={(e) => this.handleChange(e, 'lastName')}
									className='input-noaddon'
								/>
								<FormControl.Feedback />
								<HelpBlock></HelpBlock>
							</FormGroup>
						</Col>
						
						<Col md={12} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup controlId="formBasicText" >
								<ControlLabel className='grey m-bottom '>ADDRESS LINE 1</ControlLabel>
								<FormControl
									type="text"
									value={this.state.address.addressLine1}
									placeholder="STREET"
									onChange={(e) => this.handleAddressChange(e, 'addressLine1')}
									className='input-noaddon'
								/>
								<FormControl.Feedback />
								<HelpBlock></HelpBlock>
							</FormGroup>
						</Col>

						<Col md={12} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup controlId="formBasicText" >
								<ControlLabel className='grey m-bottom '>ADDRESS LINE 2</ControlLabel>
								<FormControl
									type="text"
									value={this.state.address.addressLine2}
									placeholder="APT#"
									onChange={(e) => this.handleAddressChange(e, 'addressLine2')}
									className='input-noaddon'
								/>
								<FormControl.Feedback />
								<HelpBlock></HelpBlock>
							</FormGroup>
						</Col>

						<Col md={6} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup controlId="formBasicText" >
								<ControlLabel className='grey m-bottom '>POSTAL CODE</ControlLabel>
								<FormControl
									type="text"
									value={this.state.address.zipcode}
									placeholder="Zipcode"
									onChange={(e) => this.handleAddressChange(e, 'zipcode')}
									className='input-noaddon'
								/>
								<FormControl.Feedback />
								<HelpBlock></HelpBlock>
							</FormGroup>
						</Col>

						<Col md={6} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup controlId="formBasicText">
								<ControlLabel className='grey m-bottom '>CITY</ControlLabel>
								<FormControl
									type="text"
									value={this.state.address.city}
									placeholder="City"
									onChange={(e) => this.handleAddressChange(e, 'city')}
									className='input-noaddon'/>
								<FormControl.Feedback />
								<HelpBlock></HelpBlock>
							</FormGroup>
						</Col>

						<Col md={6} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup controlId="formBasicText">
								<ControlLabel className='grey m-bottom'>COUNTRY</ControlLabel>
								<FormControl
									componentClass="select"
									className='input-noaddon'
									value={this.state.address.country}
									onChange={(e) => this.handleChangeOnCountry(e)}>
									<option value="select">select</option>
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
								<ControlLabel className='grey m-bottom' >STATE</ControlLabel>
								<FormControl 
									componentClass="select" 
									className='input-noaddon' 
									value={this.state.address.state}
									onChange={(e) => this.handleAddressChange(e, 'state')}>
									<option value="select">select</option>
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
								<ControlLabel className='grey m-bottom'>NATIONALITY</ControlLabel>
								<FormControl componentClass="select" className='input-noaddon' onChange={(e) => this.handleChange(e, 'nationality')}>
									<option value="select">select</option>
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
								<ControlLabel className='grey m-bottom '>BIRTH DATE</ControlLabel>
								<DatePicker peekNextMonth
									showMonthDropdown
									showYearDropdown
									dropdownMode="select"
									selected={this.state.birthday}
									onChange={ (d) => this.setBirthday(d) }
									className="form-control" />
							</FormGroup>
						</Col>
					</Row>			
				</Col>

				<Col mdOffset={7} md={3} xsOffset={1} xs={10}>
					<div className='verif-save-btn bg-blue white m-bottom-40' onClick={this.uploadPersonalInformation.bind(this)}>SAVE SECTION</div>
				</Col>
			</Row>
		)
	}
}

export default Declar