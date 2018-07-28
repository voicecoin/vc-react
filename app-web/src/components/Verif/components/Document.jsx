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
import Dropzone from 'react-dropzone'
import { FormattedMessage } from 'react-intl';

import verifApi from '../api'
import { AlertList, Alert, AlertContainer } from "react-bs-notifier";

class Document extends Component {
	constructor(props, context) {
		super(props, context);

		this.handleChange = this.handleChange.bind(this);

		this.state = {
			value: '',
			files: [],
			message: ''
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

	componentWillMount = () => {
		let self = this

		verifApi.getDocumentSignature().then(function (data) {
			self.setState({
				files: data == null ? [] : [data],
			});
		})

	}

	uploadDocumentSignature() {
		const formData = new FormData();
		formData.append('file', this.state.files[0])

		verifApi.uploadDocumentSignature(formData).then((data) => {
			console.log(data)
			this.setState({message: 'Update successfully.'})
		})
	}

	onMessageDismiss(){
		this.setState({message: ''})
	}

	render() {
		return (
			<Row className="ver-indent of no-margin">
				<Col mdOffset={2} md={8} xsOffset={1} xs={10} className='app-card'>
					<Row className="no-margin">
						<Col className="b-text black left m-bottom-40">
							<FormattedMessage id='doc.title' defaultMessage='Document Signatures' />
						</Col>
					</Row>

					<Row className="no-margin">
						<Col md={6} xs={12}>
							<Col className='left p-r-50 m-bottom-20' >
								<FormGroup controlId="formControlsFile">
									<ControlLabel className='grey m-bottom'>
										<FormattedMessage id='doc.agreement' defaultMessage='SIMPLE AGREEMENT FOR FUTURE TOKENS' />
									</ControlLabel>
									<section>
										<div className="dropzone">
											<Dropzone onDrop={this.onDrop.bind(this)}>
												<p className='app-dz-text'>
													<FormattedMessage id='verif.dz' defaultMessage='Try dropping some files here, or click to select files to upload.' />
												</p>
											</Dropzone>
										</div>
										<aside>
											<h5 className='bold'>
												<FormattedMessage id='verif.dropFile' defaultMessage='Dropped files' />
											</h5>
											<ul>
												{
													this.state.files.map(f => <li className='blue bold' key={f.name}><a href={f.path} target='_blank'>{f.name}</a> - {f.size} bytes</li>)
												}
											</ul>
										</aside>
									</section>
								</FormGroup>
							</Col>
						</Col>

						<Col>
							<p className='black left m-bottom-20'>
								<FormattedMessage id='doc.other1' defaultMessage='Please print, sign, scan, and upload this document (less than 10MB). ' />
							</p>
						</Col>
					</Row>
				</Col>

				<Col mdOffset={7} md={3} xsOffset={1} xs={10}>
					<div className='verif-save-btn app-btn white m-bottom-40' onClick={() => this.uploadDocumentSignature()}>
						<FormattedMessage id='verif.save' defaultMessage='SAVE SECTION' />
					</div>
				</Col>

				{
					this.state.message.length > 0 ? (
						<AlertContainer>
							<Alert type="info" timeout={3000} onDismiss={this.onMessageDismiss.bind(this)}>{this.state.message}</Alert>
						</AlertContainer>
					) : ''
				}
			</Row>
		)
	}
}

export default Document