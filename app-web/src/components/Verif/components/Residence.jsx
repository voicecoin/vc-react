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


class Residence extends Component {
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
			<div className="ver-indent">
				<Col 
				mdOffset={1} 
				md={10} 
				xsOffset={1}
				xs={10}
				className='app-card'>
					<div className="b-text black left m-bottom-40">
					Residence Verification
					</div>
					<Col md={6} xs={12}>
						<Col md={12} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup
							controlId="formControlsFile">
								<ControlLabel className='grey m-bottom'>PROOF OF RESIDENCE</ControlLabel>
								<FormControl type="file">
								</FormControl>
							</FormGroup>
						</Col>

					</Col>

					<Col md={6} xs={12}>
						<p className='black left m-bottom-20'>
						Valid Proof of Residence Documents include: 
						</p>
						<p className='black left m-bottom-20'>
						A bank account statement. 
						A utility bill (electricity, water, internet, etc.). 
						A government-issued document (tax statement, certificate of residency, etc.). 
						</p>
						<p className='black left m-bottom-20'>
						High Quality Photos Or Scanned Images Of These Documents Are Acceptable (less than 10MB each). 
						</p>
						<p className='black left m-bottom-20'>
						Your NAME, ADDRESS, ISSUE DATE and ISSUER are clearly visible. The submitted proof of residence document is NOT OLDER THAN THREE MONTHS. You submit color photographs or scanned images in HIGH QUALITY (at least 300 DPI)	
						</p>
						<p className='black left m-bottom-20'>
						Limitations On Acceptable Document Types May Apply.
						</p>
					</Col>

				</Col>	
			</div>
		)
	}
}

export default Residence