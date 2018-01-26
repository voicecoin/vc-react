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


class Document extends Component {
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
					Document Signatures
					</div>
					<Col md={6} xs={12}>
						<Col md={12} xs={12} className='left p-r-50 m-bottom-20' >
							<FormGroup
							controlId="formBasicText"
							validationState={this.getValidationState()}
							 
							>
								<ControlLabel className='grey m-bottom'>SIMPLE AGREEMENT FOR FUTURE TOKENS</ControlLabel>
								<FormControl
									componentClass="select"
									className='input-noaddon'
								>
									<option value="select">Choose file...</option>
									<option value="other">...</option>
								</FormControl>
							</FormGroup>
						</Col>

					</Col>

					<Col md={6} xs={12}>
						<p className='black left m-bottom-20'>
						Please print, sign, scan, and upload this document (less than 10MB). 
						</p>
					</Col>

				</Col>	
			</div>
		)
	}
}

export default Document