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

import Declar from './components/Declar'
import Indent from './components/Indent'
import Residence from './components/Residence'
import Document from './components/Document'
import Personal from './components/Personal'

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
			<Personal/>

			<Indent/>

			<Declar/>

			<Residence/>

			<Document/>
		</div>
      </div>
    );
  }
}

export default Verif;