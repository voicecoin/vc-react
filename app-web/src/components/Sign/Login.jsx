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

import AlertSimple from '../ReactAlert/AlertSimple'

//services
import signApi from './services/api'
//style
import './Sign.css';

class Login extends Component {
	constructor(){
		super();

		this.state = {
      email: '',
      emailValidationMessage: '',
      password: '',
      passwordValidationMessage: '',
      activationMessage: ''
		}
	}

	componentDidMount(){
		let self = this;
		if(this.props.activationCode){
			signApi.activate(this.props.activationCode)
				.then(function(data){
					self.setState({ activationMessage: data });
				})
		}
	}
	
	emailValidationState(){
		if(this.state.email === '') return null
		return signApi.validateEmail(this.state.email) ? 'success' : 'error'; 
  }
  
  onEmailChange(e){
    this.setState({ email: e.target.value, emailValidationMessage: '', passwordValidationMessage: '' })
  }

  passwordValidation(){
    if(this.state.password.length == 0) return null;
    return this.state.password.length > 5 ? 'success' : 'error';
  }

	onPasswordChange(e){	
		this.setState({ password: e.target.value, emailValidationMessage: '', passwordValidationMessage: '' })
  }

  login = () => {
		let self = this;
		signApi.login(this.state.email, this.state.password)
      .then(function(data){
        localStorage.setItem('token', data)
        self.props.history.push('/purchase')
      }, function(response){
        self.setState({passwordValidationMessage: response.data})
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
          },
          helpBlock: {
            color: 'yellow'
          }
        },
      }

    return (
      <Row style={style.log}>
        <div style={style.log.header}> 
          Login
        </div>

        <FormGroup>
          <InputGroup bsSize="large">
            <InputGroup.Addon className='input-addon white border-white'>
              <i className="fa fa-envelope ft-icon"></i>				
            </InputGroup.Addon>
            <FormControl 
            type="email" 
            className='input-basic white ph-white border-white'
            placeholder='please enter the email'
            value={this.state.email}
            onChange={(e) => this.onEmailChange(e)}/>
          </InputGroup>
          <HelpBlock>{this.state.emailValidationMessage}</HelpBlock>
        </FormGroup>

        <FormGroup>
          <InputGroup bsSize="large">
            <InputGroup.Addon className='input-addon white border-white'>
            <i className="fa fa-key ft-icon"></i>
            </InputGroup.Addon>
            <FormControl 
            type="password" 
            className='input-basic white ph-white border-white'
            placeholder='please enter the password'
            value={this.state.password}
            onChange={(e) => this.onPasswordChange(e)}/>
          </InputGroup>
          <HelpBlock style={style.log.helpBlock}>{this.state.passwordValidationMessage}</HelpBlock>
        </FormGroup>

        <div style={style.log.btn} className='sign-btn' onClick={this.props.login(this.state.email, this.state.password)}>
          LOGIN
        </div>

        <AlertSimple bsStyle="success" content={this.state.activationMessage} />
      </Row>
    );
  }
}

export default Login;