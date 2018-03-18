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
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';

import verifApi from '../api'

import 'react-day-picker/lib/style.css';
import 'react-datepicker/dist/react-datepicker.css';

class Indent extends Component {
	constructor(props, context) {
		super(props, context);

		this.handleChange = this.handleChange.bind(this);

		this.state = {
			value: '',
			frontSidePhoto: [],
			backSidePhoto: [],
			documentTypeId: null,
			idDocumentTypes: [],
			documentNumber: null,
			issueDate: null,
			expiryDate: null
		};
	}

	componentWillMount = () => {
		let self = this

		verifApi.getIdDocumentTypes().then(function (data) {
			self.setState({ idDocumentTypes: data.items });
		})

		verifApi.getIdentificationVerification().then(function (data) {
			self.setState({
				documentNumber: data.documentNumber,
				documentTypeId: data.documentTypeId,
				issueDate: data.issueDate == null ? null : moment(data.issueDate),
				expiryDate: data.expiryDate == null ? null : moment(data.expiryDate)
			});
		})

	}

	getValidationState() {
		const length = this.state.value.length;
		if (length > 10) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
		return null;
	}

	handleChange(e, key) {
		this.setState({ [key]: e.target.value });
	}

	setIssueDate(d) {
		this.setState({ issueDate: d });
	}

	setExpiryDate(d) {
		this.setState({ expiryDate: d });
	}

	onDrop(side, files) {
		this.setState({
			[side]: files
		});

	}

	uploadDocumentSignature() {
		const formData = new FormData();
		formData.append('frontSidePhoto', this.state.frontSidePhoto[0])
		formData.append('backSidePhoto', this.state.backSidePhoto[0])
		formData.append('documentNumber', this.state.documentNumber)
		formData.append('documentTypeId', this.state.documentTypeId)
		if (this.state.issueDate != null) {
			formData.append('issueDate', this.state.issueDate.format())
		}

		if (this.state.expiryDate != null) {
			formData.append('expiryDate', this.state.expiryDate.format())
		}

		verifApi.uploadIdentificationVerification(formData).then((data) => {
			console.log(data)
		})
	}


	render() {
		return (
			<Row className="ver-indent of no-margin">
				<Col mdOffset={2} md={8} xsOffset={1} xs={10} className='app-card'>
					<Row className="no-margin">
						<Col className="b-text black left m-bottom-40">
							<FormattedMessage id='iv.title' defaultMessage='Identification Verification' />
						</Col>
					</Row>
					<Row>
						<Col md={6} xs={12}>
							<Col className='left p-r-50 m-bottom-20' >
								<FormGroup controlId="formControlsFile">
									<ControlLabel className='grey m-bottom'>
										<FormattedMessage id='iv.frontId' defaultMessage='FRONT SIDE PHOTO ID DOCUMENT' />
									</ControlLabel>
									<section>
										<div className="dropzone">
											<Dropzone onDrop={this.onDrop.bind(this, 'frontSidePhoto')}>
												<div className='app-dz-text'>
													<FormattedMessage id='iv.dz' defaultMessage='Try dropping some files here, or click to select files to upload.' />
												</div>
											</Dropzone>
										</div>
										<aside>
											<h5 className='bold'>
												<FormattedMessage id='iv.dropFile' defaultMessage='Dropped files' />
											</h5>
											<ul>
												{
													this.state.frontSidePhoto.map(f => <li className='blue bold' key={f.name}>{f.name} - {f.size} bytes</li>)
												}
											</ul>
										</aside>
									</section>
								</FormGroup>
							</Col>

							<Col className='left p-r-50 m-bottom-20' >
								<FormGroup controlId="formControlsFile">
									<ControlLabel className='grey m-bottom'>
										<FormattedMessage id='iv.backId' defaultMessage='BACK SIDE PHOTO ID DOCUMENT' />
									</ControlLabel>
									<section>
										<div className="dropzone">
											<Dropzone onDrop={this.onDrop.bind(this, 'backSidePhoto')}>
												<p className='app-dz-text'>
													<FormattedMessage id='iv.dz' defaultMessage='Try dropping some files here, or click to select files to upload.' />
												</p>
											</Dropzone>
										</div>
										<aside>
											<h5 className='bold'>
												<FormattedMessage id='iv.dropFile' defaultMessage='Dropped files' />
											</h5>
											<ul>
												{
													this.state.backSidePhoto.map(f => <li className='blue bold' key={f.name}>{f.name} - {f.size} bytes</li>)
												}
											</ul>
										</aside>
									</section>
								</FormGroup>
							</Col>

							<Col className='left p-r-50 m-bottom-20' >
								<FormGroup
									controlId="formBasicText">
									<ControlLabel className='grey m-bottom'>
										<FormattedMessage id='iv.idType' defaultMessage='ID DOCUMENT TYPE' />
									</ControlLabel>
									<FormControl
										componentClass="select"
										className='input-noaddon'
										value={this.state.documentTypeId}
										onChange={(e) => this.handleChange(e, 'documentTypeId')}>
										<option value="select">
											<FormattedMessage id='iv.select' defaultMessage='select' />
										</option>
										{
											this.state.idDocumentTypes.map((c) => {
												return <option value={c.id}>{c.term}</option>
											})
										}
									</FormControl>
								</FormGroup>
							</Col>

							<Col className='left p-r-50 m-bottom-20' >
								<FormGroup
									controlId="formBasicText"
									validationState={this.getValidationState()}>
									<ControlLabel className='grey m-bottom'>
										<FormattedMessage id='iv.idNum' defaultMessage='ID DOCUMENT NUMBER' />

									</ControlLabel>
									<FormControl
										type="text"
										value={this.state.documentNumber}
										placeholder="ID DOCUMENT NUMBER"
										onChange={(e) => this.handleChange(e, 'documentNumber')}
										className='input-noaddon'
									/>
								</FormGroup>
							</Col>

							<Col className='left m-bottom-20' >
								<FormGroup controlId="formBasicText">
									<ControlLabel className='grey m-bottom '>
										<FormattedMessage id='iv.issueDate' defaultMessage='ISSUE DATE' />
									</ControlLabel>
									<DatePicker peekNextMonth
										showMonthDropdown
										showYearDropdown
										dropdownMode="select"
										selected={this.state.issueDate}
										onChange={(d) => this.setIssueDate(d)}
										className="form-control" />
								</FormGroup>
							</Col>

							<Col className='left m-bottom-40' >
								<FormGroup controlId="formBasicText">
									<ControlLabel className='grey m-bottom '>
										<FormattedMessage id='iv.expiryDate' defaultMessage='EXPIRY DATE' />
									</ControlLabel>
									<DatePicker peekNextMonth
										showMonthDropdown
										showYearDropdown
										dropdownMode="select"
										selected={this.state.expiryDate}
										onChange={(e) => this.setExpiryDate(e)}
										className="form-control" />
								</FormGroup>
							</Col>
						</Col>

						<Col md={6} xs={12} className='black'>
							<p className='left m-bottom-20'>
								<FormattedMessage id='iv.other1' defaultMessage='Valid Government-Issued Identification Documents include:' />
							</p>
							<p className='left m-bottom-20'>
								<FormattedMessage id='iv.other2' defaultMessage='High Quality Photos Or Scanned Images Of These Documents Are Acceptable (less than 10MB each).' />
							</p>
							<p className='left m-bottom-20'>
								<FormattedMessage id='iv.other3' defaultMessage='HIGH QUALITY (colour images, 300dpi resolution or higher). VISIBLE IN THEIR ENTIRETY (watermarks are permitted). VALID, with the expiry date clearly visible.' />
							</p>
							<p className='left m-bottom-20'>
								<FormattedMessage id='iv.other4' defaultMessage='Limitations On Acceptable Document Types May Apply.' />
							</p>
						</Col>
					</Row>
				</Col>

				<Col mdOffset={7} md={3} xsOffset={1} xs={10}>
					<div className='verif-save-btn app-btn white m-bottom-40' onClick={this.uploadDocumentSignature.bind(this)}>
						<FormattedMessage id='verif.save' defaultMessage='SAVE SECTION' />
					</div>
				</Col>
			</Row>
		)
	}
}

export default Indent