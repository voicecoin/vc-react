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
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
//SERVICE
import verifApi from '../api'

class Declar extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			firstName: '',
			lastName:'',
			address: '',
			postCode: '',
			city: '',
			country: '',
			state: '',
			nationality: '',
			birthdate: null,
		};
	}

	getValidationState(property) {
		const length = property.length;
		if (length > 10) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
		return null;
	  }
	
	handleChange(e, key, per) {
		this.setState({ [key]: e.target.value });
	  }

	uploadPersonalInformation() {
		let data = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			address: this.state.address,
			postCode: this.state.postCode,
			city: this.state.city,
			country: this.state.city,
			state: this.state.state,
			nationality: this.state.nationality,
			birthdate: this.state.birthdate,
			month: this.state.month,
			day: this.state.day
		}

		verifApi.uploadPersonalInformation(data)
		.then((data) => {
			console.log(data)
		})
	}

	getDayChange(d) {
		console.log(d)
		this.setState({ birthdate: d });
	}

	render(){
		return (
            <div className="ver-perinfo of">
				<Col 
				mdOffset={2} 
				md={8} 
				xsOffset={1}
				xs={10}
				className='app-card'
				>
					<div className="b-text black left m-bottom-40">
						Personal Information
					</div>

					<Col md={6} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState(this.state.firstName)}
						>
							<ControlLabel className='grey m-bottom '>GIVEN NAME</ControlLabel>
							<FormControl
								type="text"
								value={this.state.firstName}
								placeholder="Enter text"
								onChange={(e) => this.handleChange(e, 'firstName')}
								className='input-noaddon'
							/>
							<FormControl.Feedback />
							<HelpBlock>Validation is based on string length.</HelpBlock>
						</FormGroup>
					</Col>
					
					<Col md={6} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState(this.state.lastName)}
						 
						>
							<ControlLabel className='grey m-bottom '>SUR NAME</ControlLabel>
							<FormControl
								type="text"
								value={this.state.lastName}
								placeholder="Enter text"
								onChange={(e) => this.handleChange(e, 'lastName')}
								className='input-noaddon'
							/>
							<FormControl.Feedback />
							<HelpBlock>Validation is based on string length.</HelpBlock>
						</FormGroup>
					</Col>
					
					<Col md={12} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						>
							<ControlLabel className='grey m-bottom '>ADDRESS</ControlLabel>
							<FormControl
								type="text"
								value={this.state.value}
								placeholder="Enter text"
								onChange={(e) => this.handleChange(e, 'address')}
								className='input-noaddon'
							/>
							<FormControl.Feedback />
							<HelpBlock>Validation is based on string length.</HelpBlock>
						</FormGroup>
					</Col>

					<Col md={6} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						>
							<ControlLabel className='grey m-bottom '>POSTAL CODE</ControlLabel>
							<FormControl
								type="text"
								value={this.state.value}
								placeholder="Enter text"
								onChange={(e) => this.handleChange(e, 'postCode')}
								className='input-noaddon'
							/>
							<FormControl.Feedback />
							<HelpBlock>Validation is based on string length.</HelpBlock>
						</FormGroup>
					</Col>

					<Col md={6} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						>
							<ControlLabel className='grey m-bottom '>CITY</ControlLabel>
							<FormControl
								type="text"
								value={this.state.value}
								placeholder="Enter text"
								onChange={(e) => this.handleChange(e, 'city')}
								className='input-noaddon'
							/>
							<FormControl.Feedback />
							<HelpBlock>Validation is based on string length.</HelpBlock>
						</FormGroup>
					</Col>

					<Col md={6} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						>
							<ControlLabel className='grey m-bottom'>COUNTRY</ControlLabel>
							<FormControl
								componentClass="select"
								className='input-noaddon'
								onChange={(e) => this.handleChange(e, 'country')}
							>
								<option value="select">select</option>
        						<option value="other">...</option>
								<option value="other">a</option>
								<option value="other">b</option>
							</FormControl>
						</FormGroup>
					</Col>

					<Col md={6} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						>
							<ControlLabel className='grey m-bottom' >STATE</ControlLabel>
							<FormControl
								componentClass="select"
								className='input-noaddon'
								onChange={(e) => this.handleChange(e, 'state')}
							>
								<option value="select">select</option>
        						<option value="other">...</option>
							</FormControl>
						</FormGroup>
					</Col>

					<Col md={6} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						>
							<ControlLabel className='grey m-bottom'>NATIONALITY</ControlLabel>
							<FormControl
								componentClass="select"
								className='input-noaddon'
								onChange={(e) => this.handleChange(e, 'nationality')}
							>
								<option value="select">select</option>
        						<option value="other">...</option>
							</FormControl>
						</FormGroup>
					</Col>

					<Col md={2} xs={12} className='left m-bottom-40' >
						
						<FormGroup
						controlId="formBasicText"
						>
							<ControlLabel className='grey m-bottom '>BIRTH DATE</ControlLabel>
							<DayPickerInput 
							onDayChange={ (d) => this.getDayChange(d) }
							format='parseDate'/>
						</FormGroup>
					</Col>

				</Col>
				<Col 
				mdOffset={7} 
				md={3} 
				xsOffset={1}
				xs={10}
				>
					<div className='verif-save-btn bg-blue white m-bottom-40' onClick={this.uploadPersonalInformation.bind(this)}>SAVE SECTION</div>
				</Col>
			</div>
		)
	}
}

export default Declar