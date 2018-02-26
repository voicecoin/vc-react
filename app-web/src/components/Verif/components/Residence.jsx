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
import Dropzone from 'react-dropzone'
// SERVICES
import verifApi from '../api'

class Residence extends Component {
	constructor(props, context) {
		super(props, context);
	
		this.state = {
		  value: '',
		  files: []
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

	
	onDrop(files) {
		this.setState({
			files
		});

		console.log(files)
	}

	uploadResidenceVerification(){
		const formData = new FormData();
		formData.append('file', this.state.files[0])
		
		verifApi.uploadResidenceVerification(formData).then((data) => {
			console.log(data)
		})
	}

	render(){
		return (
			<Row className="ver-indent of no-margin">
				<Col mdOffset={2} md={8} xsOffset={1} xs={10} className='app-card'>
					<Row className="no-margin">
						<Col className="b-text black left m-bottom-40">Residence Verification</Col>
					</Row>

					<Row className="no-margin">
						<Col md={6} xs={12} className='left p-r-50 m-bottom-20'>
							<FormGroup controlId="formControlsFile">
								<ControlLabel className='grey m-bottom'>PROOF OF RESIDENCE</ControlLabel>
								<section>
									<div className="dropzone">
										<Dropzone onDrop={this.onDrop.bind(this)}>
											<p className='app-dz-text'>Try dropping some files here, or click to select files to upload.</p>
										</Dropzone>
									</div>
									<aside>
									<h5 className='bold'>Dropped files</h5>
									<ul>
										{
										this.state.files.map(f => <li className='blue bold' key={f.name}>{f.name} - {f.size} bytes</li>)
										}
									</ul>
									</aside>
								</section>
							</FormGroup>
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
					</Row>
				</Col>	
				
				<Col mdOffset={7} md={3} xsOffset={1} xs={10}>
					<div className='verif-save-btn app-btn white m-bottom-40' onClick={() => this.uploadResidenceVerification()}>SAVE SECTION</div>
				</Col>
			</Row>
		)
	}
}

export default Residence