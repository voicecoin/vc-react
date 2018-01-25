import React, { Component } from 'react';
import { Grid, 
		Row, 
		Col, 
		form, 
		FormGroup,
		FormControl, 
		InputGroup, 
		Glyphicon,
		Checkbox } from 'react-bootstrap';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
//services
// import signApi from './services/api'
//style
import './Sign.css';

class Sign extends Component {

  render() {
    const style = {
		wrapper: {
			color: '#fff'
		},
		log: {
			opacity: '0.95',
			height: '500px',
			padding: '0px 20px',
			backgroundColor: '#3b96d5',
			borderRadius: '2px 0px 0px 2px',
			header: {
			fontSize: '24px',
			margin: '30px 0 30px 0px',
			textAlign:'left'
			},
			input: {
			marginBottom: '30px'
			}
		},
		sign: {
			backgroundColor: '#fff',
			height: '500px',
			padding: '0px 20px',
			borderRadius: '0px 2px 2px 0px',
			header: {
				color: '#3b96d5',
				fontSize: '24px',
				margin: '30px 0 30px 0px',
				textAlign:'left'
			},
			input: {
			marginBottom: '30px'
			},
			
		},
		checkbox: {
			color: '#aaa',
			textAlign: 'left',
			transition: '0.3s'
		}
    }

    return (
      <div style={style.wrapper}>
		<Col 
		mdOffset={2} 
		md={4} 
		xsOffset={2} 
		xs={8} 
		style={style.log}>
			<div style={style.log.header}> 
				Login
			</div>

			<InputGroup style={style.log.input} bsSize="large">
				<InputGroup.Addon className='input-addon'>
					<Glyphicon glyph="envelope" className='white'/>				
				</InputGroup.Addon>
				<FormControl type="text" className='input-basic' placeholder='email'/>
			</InputGroup>

			<InputGroup style={style.log.input} bsSize="large">
				<InputGroup.Addon className='input-addon'>
					<Glyphicon glyph="lock" className='white'/>
				</InputGroup.Addon>
				<FormControl type="text" className='input-basic' placeholder='password'/>
			</InputGroup>

			<div style={style.log.btn} className='sign-btn'>
				LOGIN
			</div>

        </Col>

        <Col mdOffset={0} md={4} xsOffset={2} xs={8}style={style.sign}>
			<div style={style.sign.header}> 
				Register
			</div>

			<div>
				<InputGroup style={style.sign.input} bsSize="large">
					<InputGroup.Addon className='input-addon grey'>
						<Glyphicon glyph="pencil"/>				
					</InputGroup.Addon>
					<FormControl type="text" className='input-basic'/>
				</InputGroup>
			</div>

			<div style={style.sign.input}>
				<InputGroup bsSize="large">
					<InputGroup.Addon className='input-addon grey'>
					<Glyphicon glyph="envelope"/>				
					</InputGroup.Addon>
					<FormControl type="text" className='input-basic'/>
				</InputGroup>
			</div>

			<div style={style.sign.input}>
				<InputGroup bsSize="large">
					<InputGroup.Addon className='input-addon grey'>
						<Glyphicon glyph="lock" />
					</InputGroup.Addon>
					<FormControl type="text" className='input-basic'/>
				</InputGroup>
			</div>

			<div style={style.checkbox}>
				<Checkbox>I have read and accept the White Paper</Checkbox>
			</div>

			<div style={style.checkbox}>
				<Checkbox>Remember me</Checkbox>
			</div>

			<div style={style.sign.btn} className='sign-btn'>
				REGISTER
			</div>

        </Col>
        
      </div>
    );
  }
}

export default Sign;