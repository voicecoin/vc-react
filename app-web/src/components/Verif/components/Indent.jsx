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


class Indent extends Component {
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
					Identification Verification
					</div>
					<Col md={6} xs={12}>
						<Col md={12} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup
							controlId="formControlsFile">
								<ControlLabel className='grey m-bottom'>FRONT SIDE PHOTO ID DOCUMENT</ControlLabel>
								<FormControl type="file">
								</FormControl>
							</FormGroup>
						</Col>

						<Col md={12} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup
							controlId="formControlsFile">
								<ControlLabel className='grey m-bottom'>BACK SIDE PHOTO ID DOCUMENT</ControlLabel>
								<FormControl type="file">
								</FormControl>
							</FormGroup>
						</Col>

						<Col md={12} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup
							controlId="formBasicText"
							validationState={this.getValidationState()}
							 
							>
								<ControlLabel className='grey m-bottom'>ID DOCUMENT TYPE</ControlLabel>
								<FormControl
									componentClass="select"
									className='input-noaddon'
								>
									<option value="select">select</option>
									<option value="other">...</option>
								</FormControl>
							</FormGroup>
						</Col>

						<Col md={12} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup
							controlId="formBasicText"
							validationState={this.getValidationState()}
							>
								<ControlLabel className='grey m-bottom'>ID DOCUMENT NUMBER</ControlLabel>
								<FormControl
									type="text"
									value={this.state.value}
									placeholder="ID DOCUMENT NUMBER"
									onChange={this.handleChange}
									className='input-noaddon'
								/>
								<FormControl.Feedback />
								<HelpBlock>Validation is based on string length.</HelpBlock>
							</FormGroup>
						</Col>

						<Col md={12} xs={12} className='left p-r-50 grey bold' >ISSUE DATE</Col>

						<Col md={4} xs={12} className='left m-bottom-40' >
							<FormGroup
							controlId="formBasicText"
							validationState={this.getValidationState()}
							
							>
								<ControlLabel className='grey m-bottom'></ControlLabel>
								<FormControl
									componentClass="select"
									className='input-noaddon'
								>
									<option value="select">select</option>
									<option value="other">...</option>
								</FormControl>
							</FormGroup>
						</Col>

						<Col md={4} xs={12} className='left m-bottom-40' >
							<FormGroup
							controlId="formBasicText"
							validationState={this.getValidationState()}
							
							>
								<ControlLabel className='grey m-bottom'> </ControlLabel>
								<FormControl
									componentClass="select"
									className='input-noaddon'
								>
									<option value="select">select</option>
									<option value="other">...</option>
								</FormControl>
							</FormGroup>
						</Col>

						<Col md={4} xs={12} className='left m-bottom-40' >
							<FormGroup
							controlId="formBasicText"
							validationState={this.getValidationState()}
							
							>
								<ControlLabel className='grey m-bottom'> </ControlLabel>
								<FormControl
									componentClass="select"
									className='input-noaddon'
								>
									<option value="select">select</option>
									<option value="other">...</option>
								</FormControl>
							</FormGroup>
						</Col>

						<Col md={12} xs={12} className='left p-r-50 grey bold' >EXPIRY DATE</Col>

						<Col md={4} xs={12} className='left m-bottom-40' >
							<FormGroup
							controlId="formBasicText"
							validationState={this.getValidationState()}
							
							>
								<ControlLabel className='grey m-bottom'> </ControlLabel>
								<FormControl
									componentClass="select"
									className='input-noaddon'
								>
									<option value="select">select</option>
									<option value="other">...</option>
								</FormControl>
							</FormGroup>
						</Col>

						<Col md={4} xs={12} className='left m-bottom-40' >
							<FormGroup
							controlId="formBasicText"
							validationState={this.getValidationState()}
							
							>
								<ControlLabel className='grey m-bottom'> </ControlLabel>
								<FormControl
									componentClass="select"
									className='input-noaddon'
								>
									<option value="select">select</option>
									<option value="other">...</option>
								</FormControl>
							</FormGroup>
						</Col>

						<Col md={4} xs={12} className='left m-bottom-40' >
							<FormGroup
							controlId="formBasicText"
							validationState={this.getValidationState()}
							
							>
								<ControlLabel className='grey m-bottom'> </ControlLabel>
								<FormControl
									componentClass="select"
									className='input-noaddon'
								>
									<option value="select">select</option>
									<option value="other">...</option>
								</FormControl>
							</FormGroup>
						</Col>
					</Col>

					<Col md={6} xs={12} className='black'>
						<p className='left m-bottom-20'>
						Valid Government-Issued Identification Documents include: 
						</p>
						<p className='left m-bottom-20'>
						Valid Government-Issued Identification Documents include: 
						</p>
						<p className='left m-bottom-20'>
						High Quality Photos Or Scanned Images Of These Documents Are Acceptable (less than 10MB each).  
						</p>
						<p className='left m-bottom-20'>
						HIGH QUALITY (colour images, 300dpi resolution or higher). VISIBLE IN THEIR ENTIRETY (watermarks are permitted). VALID, with the expiry date clearly visible.	 
						</p>
						<p className='left m-bottom-20'>
						Limitations On Acceptable Document Types May Apply.
						</p>
					</Col>

				</Col>	
			</div>
		)
	}
}

export default Indent