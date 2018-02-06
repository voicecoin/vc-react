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

import verifApi from '../api'

class Document extends Component {
	constructor(props, context) {
		super(props, context);
	
		this.handleChange = this.handleChange.bind(this);
	
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
		this.setState({ files });
	}

	uploadDocumentSignature(){
		const formData = new FormData();
		formData.append('file', this.state.files[0])
		
		verifApi.uploadDocumentSignature(formData).then((data) => {
			console.log(data)
		})
	}

	render(){
		return (
			<Row className="ver-indent of no-margin">
				<Col mdOffset={2}	md={8} xsOffset={1} xs={10} className='app-card'>
					<Row className="no-margin">
						<Col className="b-text black left m-bottom-40">Document Signatures</Col>
					</Row>

					<Row className="no-margin">
						<Col md={6} xs={12}>
							<Col className='left p-r-50 m-bottom-20' >
								<FormGroup controlId="formControlsFile">
									<ControlLabel className='grey m-bottom'>SIMPLE AGREEMENT FOR FUTURE TOKENS</ControlLabel>
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
						</Col>

						<Col>
							<p className='black left m-bottom-20'>
							Please print, sign, scan, and upload this document (less than 10MB). 
							</p>
						</Col>
					</Row>
				</Col>

				<Col mdOffset={7} md={3} xsOffset={1} xs={10}>
					<div className='verif-save-btn bg-blue white m-bottom-40' onClick={() => this.uploadDocumentSignature()}>SAVE SECTION</div>
				</Col>	
			</Row>
		)
	}
}

export default Document