import React, { Component } from 'react';
import Home from './containers/Home/Home'
import './App.css';
import { IntlProvider } from "react-intl";
import msg from './config/i18';

class App extends Component {
	constructor(props) {
		super(props);
		let lang = localStorage.getItem('vc-react-lang');
		lang = lang ? lang : 'en';		// default is English
		this.state = {
			'locale': lang,
			'messages': msg,
		};
	}
	changeLocale(lang) {

		this.setState({ locale: lang });
		localStorage.setItem('vc-react-lang', lang);
	}
	render() {
		return (
			<IntlProvider locale={this.state.locale} messages={this.state.messages[this.state.locale]}>
				<Home changeLocale={this.changeLocale.bind(this)} />
			</IntlProvider>
		);
	}
}

export default App;
