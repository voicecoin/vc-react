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
		HelpBlock } from 'react-bootstrap';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'

//services
import signApi from './services/api'
//style
import './Sign.css';

class Login extends Component {
	constructor(){
		super();

		this.state = {
			logEmail: '',
			logPwd: '',
			signName: '',
			signEmail: '',
			signPwd: '',
			showLogout: false,
			showActivationModel: false,
			showErrorMessageModel: false,
			errorMessage: ''
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

	validatePwd(pwd){
		
	}

	getEmailValidationState(){
		if(this.state.signEmail === '') return null
		return this.validateEmail(this.state.signEmail) ? 'success' : 'error'; 
	}

	handleChange(e, name){	
		this.setState({ [name]: e.target.value })
	}

  login = () => {
		let self = this;
		signApi.login(this.state.logEmail, this.state.logPwd)
		.then(function(data){
			localStorage.setItem('token', data)
			self.props.history.push('/purchase')
		}, function(response){
			self.setState({errorMessage: response.data, showErrorMessageModel: true})
		})
  }
  
  render() {
    const style = {

		log: {
        opacity: '0.95',
        height: '500px',
        padding: '3rem',
        backgroundColor: '#3b96d5',
        borderRadius: '5px 0px 0px 5px',
        header: {
        fontSize: '25px',
        fontWeight: 600,
        margin: '0px 0px 20px 0px',
        textAlign:'left'
        }
      },
    }

    return (
      <Row style={style.log}>
        <div style={style.log.header}> 
          Login
        </div>

        <InputGroup className='app-input' bsSize="large">
          <InputGroup.Addon className='input-addon border-white'>
            <Glyphicon glyph="envelope" className='white'/>				
          </InputGroup.Addon>
          <FormControl 
          placeholder='Please enter the email'
          type="email" 
          className='input-basic white ph-white border-white' 
          value={this.state.email}
          onChange={(e) => this.handleChange(e, 'logEmail')}/>
        </InputGroup>

        <InputGroup className='app-input' bsSize="large">
          <InputGroup.Addon className='input-addon border-white'>
            <Glyphicon glyph="lock" className='white'/>
          </InputGroup.Addon>
          <FormControl 
          type="password" 
          className='input-basic white ph-white border-white'
          placeholder='Please enter the password' 
          value={this.state.pwd}
          onChange={(e) => this.handleChange(e, 'logPwd')}/>
        </InputGroup>

        <div style={style.log.btn} className='sign-btn' onClick={this.login.bind(this)}>
          LOGIN
        </div>

    
        <Modal show={this.state.showActivationModel} onHide={this.handleActivationHide}>
          <Modal.Header>
          <Modal.Title id="contained-modal-title">
            Account Activation
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Your account has been activated successfully. 
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={this.handleActivationHide}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showErrorMessageModel} onHide={() => { this.setState({showErrorMessageModel: false}) }}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title" className='bold'>
              Error Occurred
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.state.errorMessage}</p>
          </Modal.Body>
        </Modal>
      </Row>
    );
  }
}

export default Login;