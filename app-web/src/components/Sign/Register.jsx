import React, { Component } from 'react';
//libs
import { Grid, 
		Row, 
		Col, 
		form, 
		FormGroup,
		FormControl, 
		InputGroup, 
		Glyphicon,
		Modal,
		Button,
		Checkbox,
		HelpBlock } from 'react-bootstrap';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'

//services
import signApi from './services/api'
//style
import './Sign.css';

class Register extends Component {
	constructor(){
		super();

		this.state = {
			signName: '',
			signEmail: '',
			signPwd: '',
			showSignupMessageModel: false,
			signupMessage: '',
			signupTerm: {
				checkedAccreditedInvestor: false,
				checkedWhitePaper: false,
				checkedSaft: false
			}
		}
	}

	componentDidMount(){
		let self = this;

	}

	handleActivationHide = () => {
		this.setState({ showActivationModel: false });
		this.props.history.push('../')
	}
	
	validateEmail(email){
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(String(email).toLowerCase());
	}

	getEmailValidationState(){
		if(this.state.signEmail === '') return null
		return this.validateEmail(this.state.signEmail) ? 'success' : 'error'; 
	}

	signup(){
		let self = this;
		let signupData = {
			fullName: this.state.signName,
			email: this.state.signEmail,
			password: this.state.signPwd
		}

		if(signupData.fullName.length < 3 ||
			signupData.email.length < 5 ||
			signupData.password.length < 6) return;

		var signupTerm = Object.assign({}, 
			this.state.signupTerm, 
			{
				checkedAccreditedInvestorValidation: self.state.signupTerm.checkedAccreditedInvestor ? 'success' : 'error',
				checkedWhitePaperValidation: self.state.signupTerm.checkedWhitePaper ? 'success' : 'error',
				checkedSaftValidation: self.state.signupTerm.checkedSaft ? 'success' : 'error'
			});

		self.setState({signupTerm: signupTerm});

		if(!self.state.signupTerm.checkedAccreditedInvestor ||
			!self.state.signupTerm.checkedWhitePaper ||
			!self.state.signupTerm.checkedSaft) return;

		signApi.sign(signupData).then(function(data){
			self.setState({signupMessage: data, showSignupMessageModel: true})
		}, function(response){
			self.setState({signupMessage: response.data, showSignupMessageModel: true})
		})
	}

	onSignupPasswordChange(e){	
		
	}

	onTermChecked(e, name){
		var signupTerm = Object.assign({}, this.state.signupTerm, {[name]: !this.state.signupTerm[name], [name + 'Validation']: null });
		this.setState({ signupTerm: signupTerm})
	}

  render() {
    const style = {
		
		sign: {
			backgroundColor: '#fff',
			height: '500px',
			padding: '3rem',
			borderRadius: '0px 5px 5px 0px',
			header: {
				color: '#3b96d5',
				fontSize: '25px',
				fontWeight: 600,
				margin: '0px 0px 20px 0px',
				textAlign:'left'
			  }
		  },
    }

    return (
      <Row style={style.sign}>
        <div style={style.sign.header}> 
          Register
        </div>

        <div>
          <FormGroup>
            <InputGroup 
            className='app-input' 
            style={style.sign.input} bsSize="large">
              <InputGroup.Addon className='input-addon grey'>
                <Glyphicon glyph="pencil"/>				
              </InputGroup.Addon>
              <FormControl 
              type="text" 
              className='input-basic ph-grey'
              placeholder='Please enter the username'
              value={this.state.signName}
              onChange={(e) => this.handleChange(e, 'signName')}/>
            </InputGroup>
          </FormGroup>
        </div>
        
        <div className='app-input'>
          <FormGroup validationState={this.getEmailValidationState()}>
            <InputGroup bsSize="large">
              <InputGroup.Addon className='input-addon grey'>
              <Glyphicon glyph="envelope"/>				
              </InputGroup.Addon>
              <FormControl 
              type="email" 
              className='input-basic ph-grey'
              placeholder='please enter the email'
              value={this.state.signEmail}
              onChange={(e) => this.handleChange(e, 'signEmail')}/>
            </InputGroup>
          </FormGroup>
        </div>

        <div className='app-input'>
          <FormGroup validationState={this.state.signupPasswordValidation}>
            <InputGroup bsSize="large">
              <InputGroup.Addon className='input-addon grey'>
                <Glyphicon glyph="lock" />
              </InputGroup.Addon>
              <FormControl 
              type="password" 
              className='input-basic ph-grey'
              placeholder='please enter the password'
              value={this.state.signPwd}
              onChange={(e) => this.handleChange(e, 'signPwd')}/>
            </InputGroup>
            <HelpBlock>{this.state.signupPasswordValidationMessage}</HelpBlock>
          </FormGroup>
        </div>

        <div className='app-checkbox left m-bottom-20' >
          <Checkbox validationState={this.state.signupTerm.checkedAccreditedInvestorValidation} 
            checked={this.state.signupTerm.checkedAccreditedInvestor} 
            onChange={(e) => this.onTermChecked(e, 'checkedAccreditedInvestor')}>I am either not a U.S. Citizen or I am an <a href="#" target="_blank">Accredited Investor</a></Checkbox>
          <Checkbox validationState={this.state.signupTerm.checkedWhitePaperValidation} 
            checked={this.state.signupTerm.checkedWhitePaper} 
            onChange={(e) => this.onTermChecked(e, 'checkedWhitePaper')}>I have read and accept the <a href="#" target="_blank">White Paper</a></Checkbox>
          <Checkbox validationState={this.state.signupTerm.checkedSaftValidation} 
            checked={this.state.signupTerm.checkedSaft} 
            onChange={(e) => this.onTermChecked(e, 'checkedSaft')}>I have read and accept the <a href="#" target="_blank">SAFT</a></Checkbox>
        </div>

        {/* <div className='app-checkbox left m-bottom-20'>
          <Checkbox>Remember me</Checkbox>
        </div> */}

        <div style={style.sign.btn} className='sign-btn' onClick={this.signup.bind(this)}>
          REGISTER
        </div>

        <Modal show={this.state.showSignupMessageModel} onHide={() => { this.setState({showSignupMessageModel: false}) }}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title" className='bold'>
              Signup
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.state.signupMessage}</p>
          </Modal.Body>
        </Modal>
      </Row>
    );
  }
}

export default Register;