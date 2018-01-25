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

import './Verif.css';

class Verif extends Component {
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


  render() {
    const style = {
      header: {

      },
      container: {
        
      }
    }

    return (
      <div>
        <div className="app-tab">
			<Col md={10} mdOffset={1}  xsOffset={1} xs={10}>
				<div className='left s-text m-bottom'>PURCHASE TOKENS WITH</div>
				<div className="app-btn f-left">BITCOIN</div>
			</Col> 
        </div>

		<div className="ver-main of bg-white">
			<div className="ver-perinfo">
				<Col 
				mdOffset={1} 
				md={10} 
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
						validationState={this.getValidationState()}
						 
						>
							<ControlLabel className='black m-bottom'>Working example with validation</ControlLabel>
							<FormControl
								type="text"
								value={this.state.value}
								placeholder="Enter text"
								onChange={this.handleChange}
								className='input-noaddon'
							/>
							<FormControl.Feedback />
							<HelpBlock>Validation is based on string length.</HelpBlock>
						</FormGroup>
					</Col>

					
					<Col md={6} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState()}
						 
						>
							<ControlLabel className='black m-bottom'>Working example with validation</ControlLabel>
							<FormControl
								type="text"
								value={this.state.value}
								placeholder="Enter text"
								onChange={this.handleChange}
								className='input-noaddon'
							/>
							<FormControl.Feedback />
							<HelpBlock>Validation is based on string length.</HelpBlock>
						</FormGroup>
					</Col>

					
					<Col md={12} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState()}
						 
						>
							<ControlLabel className='black m-bottom'>Working example with validation</ControlLabel>
							<FormControl
								type="text"
								value={this.state.value}
								placeholder="Enter text"
								onChange={this.handleChange}
								className='input-noaddon'
							/>
							<FormControl.Feedback />
							<HelpBlock>Validation is based on string length.</HelpBlock>
						</FormGroup>
					</Col>


					
					<Col md={6} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState()}
						 
						>
							<ControlLabel className='black m-bottom'>Working example with validation</ControlLabel>
							<FormControl
								type="text"
								value={this.state.value}
								placeholder="Enter text"
								onChange={this.handleChange}
								className='input-noaddon'
							/>
							<FormControl.Feedback />
							<HelpBlock>Validation is based on string length.</HelpBlock>
						</FormGroup>
					</Col>

					
					<Col md={6} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState()}
						 
						>
							<ControlLabel className='black m-bottom'>Working example with validation</ControlLabel>
							<FormControl
								type="text"
								value={this.state.value}
								placeholder="Enter text"
								onChange={this.handleChange}
								className='input-noaddon'
							/>
							<FormControl.Feedback />
							<HelpBlock>Validation is based on string length.</HelpBlock>
						</FormGroup>
					</Col>

					<Col md={6} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState()}
						 
						>
							<ControlLabel className='black m-bottom'>select</ControlLabel>
							<FormControl
								componentClass="select"
								className='input-noaddon'
							>
								<option value="select">select</option>
        						<option value="other">...</option>
							</FormControl>
						</FormGroup>
					</Col>

					<Col md={6} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState()}
						 
						>
							<ControlLabel className='black m-bottom'>select</ControlLabel>
							<FormControl
								componentClass="select"
								className='input-noaddon'
							>
								<option value="select">select</option>
        						<option value="other">...</option>
							</FormControl>
						</FormGroup>
					</Col>

					<Col md={6} xs={12} className='left p-r-50 m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState()}
						 
						>
							<ControlLabel className='black m-bottom'>select</ControlLabel>
							<FormControl
								componentClass="select"
								className='input-noaddon'
							>
								<option value="select">select</option>
        						<option value="other">...</option>
							</FormControl>
						</FormGroup>
					</Col>

					<Col md={2} xs={12} className='left m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState()}
						 
						>
							<ControlLabel className='black m-bottom'>select</ControlLabel>
							<FormControl
								componentClass="select"
								className='input-noaddon'
							>
								<option value="select">select</option>
        						<option value="other">...</option>
							</FormControl>
						</FormGroup>
					</Col>

					<Col md={2} xs={12} className='left m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState()}
						 
						>
							<ControlLabel className='black m-bottom'>select</ControlLabel>
							<FormControl
								componentClass="select"
								className='input-noaddon'
							>
								<option value="select">select</option>
        						<option value="other">...</option>
							</FormControl>
						</FormGroup>
					</Col>

					<Col md={2} xs={12} className='left m-bottom-40' >
						<FormGroup
						controlId="formBasicText"
						validationState={this.getValidationState()}
						 
						>
							<ControlLabel className='black m-bottom'>select</ControlLabel>
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
			</div>

			<div className="ver-declar">
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
								<ControlLabel className='black m-bottom'>select</ControlLabel>
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
								<ControlLabel className='black m-bottom'>select</ControlLabel>
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
								<ControlLabel className='black m-bottom'>select</ControlLabel>
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

					<Col md={6} xs={12}>
						<p className='black left'>
						Under the Foreign Account Tax Compliance Act (FATCA) foreign financial institutions are obligated to report financial accounts held by U.S. taxpayers or foreign entities in which U.S. taxpayers hold a substantial ownership interest.
						</p>
					</Col>

				</Col>	
			</div>

			<div className="ver-indeti">
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
							controlId="formBasicText"
							validationState={this.getValidationState()}
							 
							>
								<ControlLabel className='black m-bottom'>select</ControlLabel>
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
								<ControlLabel className='black m-bottom'>select</ControlLabel>
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
								<ControlLabel className='black m-bottom'>select</ControlLabel>
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
								<ControlLabel className='black m-bottom'>select</ControlLabel>
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
								<ControlLabel className='black m-bottom'>select</ControlLabel>
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
								<ControlLabel className='black m-bottom'>select</ControlLabel>
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
								<ControlLabel className='black m-bottom'>select</ControlLabel>
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
								<ControlLabel className='black m-bottom'>select</ControlLabel>
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
								<ControlLabel className='black m-bottom'>select</ControlLabel>
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

					<Col md={6} xs={12}>
						<p className='black left m-bottom-20'>
						Valid Government-Issued Identification Documents include: 
						</p>
						<p className='black left m-bottom-20'>
						Valid Government-Issued Identification Documents include: 
						</p>
						<p className='black left m-bottom-20'>
						High Quality Photos Or Scanned Images Of These Documents Are Acceptable (less than 10MB each).  
						</p>
						<p className='black left m-bottom-20'>
						HIGH QUALITY (colour images, 300dpi resolution or higher). VISIBLE IN THEIR ENTIRETY (watermarks are permitted). VALID, with the expiry date clearly visible.	 
						</p>
						<p className='black left m-bottom-20'>
						Limitations On Acceptable Document Types May Apply.
						</p>
					</Col>

				</Col>	
			</div>
			<div className="ver-residence">
				<Col 
				mdOffset={1} 
				md={10} 
				xsOffset={1}
				xs={10}
				className='app-card'>
					<div className="b-text black left">
						Personal Information
					</div>
				</Col>	
			</div>
			<div className="ver-doc">
				<Col 
				mdOffset={1} 
				md={10} 
				xsOffset={1}
				xs={10}
				className='app-card'>
					<div className="b-text black left">
						Personal Information
					</div>
				</Col>	
			</div>
		</div>
      </div>
    );
  }
}

export default Verif;