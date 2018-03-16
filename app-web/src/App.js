import React, { Component } from 'react';
import Home from './containers/Home/Home'
import './App.css';
import { IntlProvider } from "react-intl";
import msg from './config/i18';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			'lang': localStorage.getItem('vc-react-lang'),
			'messages': msg,
		};
	}
	render() {
		return (
			<IntlProvider locale={this.state.lang} messages={this.state.messages[this.state.lang]}>
				<Home />
			</IntlProvider>
		);
	}
}

export default App;
