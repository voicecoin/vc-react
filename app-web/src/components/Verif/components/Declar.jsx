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


class Declar extends Component {
	constructor(props, context) {
		super(props, context);
	
		this.handleChange = this.handleChange.bind(this);
	
		this.state = {
		  value: ''
		};
	}

	getValidationState() {
		const length = this.state.value.length;
		if (length > 10) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
		return null;
	  }
	
	  handleChange(e) {
		this.setState({ value: e.target.value });
	  }


	render(){
		return (
			<div className="ver-declar of">
				<Col 
				mdOffset={1} 
				md={10} 
				xsOffset={1}
				xs={10}
				className='app-card'>
					<div className="b-text black left m-bottom-40">
						Declarations
					</div>
					<Col md={6} xs={12}>
						<Col md={12} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup
							controlId="formBasicText"
							validationState={this.getValidationState()}
							>
								<FormControl
									componentClass="select"
									className='input-noaddon'
								>
									<option value="select">Select Declaration #1</option>
									<option value="other">...</option>
								</FormControl>
							</FormGroup>
						</Col>

						<Col md={12} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup
							controlId="formBasicText"
							validationState={this.getValidationState()}
							 
							>
								<FormControl
									componentClass="select"
									className='input-noaddon'
								>
									<option value="select">Select Declaration #2</option>
									<option value="other">...</option>
								</FormControl>
							</FormGroup>
						</Col>

						<Col md={12} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup
							controlId="formBasicText"
							validationState={this.getValidationState()}
							 
							>
								<FormControl
									componentClass="select"
									className='input-noaddon'
								>
									<option value="select">Select Declaration #3</option>
									<option value="other">...</option>
								</FormControl>
							</FormGroup>
						</Col>
					</Col>

					<Col md={6} xs={12}>
						<p className='black left'>
						Under the Foreign Account Tax Compliance Act (FATCA) foreign financial institutions are obligated to report financial accounts held by U.S. taxpayers or foreign entities in which U.S. taxpayers hold a substantial ownership interest.
						</p>
					</Col>

				</Col>

				<Col 
				mdOffset={8} 
				md={3} 
				xsOffset={1}
				xs={10}
				>
					<div className='verif-save-btn bg-blue white m-bottom-40'>SAVE SECTION</div>
				</Col>
			</div>
		)
	}
}

export default Declar