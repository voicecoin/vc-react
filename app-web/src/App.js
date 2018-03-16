import React, { Component } from 'react';

//components
import Home from './containers/Home/Home'
//style
import './App.css';

import { IntlProvider } from "react-intl";

let l = 'zh'
let m = {
	en: {
		'navbar.pricing': 'PRICING',
		'navbar.faq': 'FAQ',
		'navbar.overview': 'OVERVIEW',
		'navbar.logout': 'LOGOUT',
	},
	zh: {
		'navbar.pricing': '价格',
		'navbar.faq': '常见问题',
		'navbar.overview': '总览',
		'navbar.logout': '登出',
	}
}

class App extends Component {
	render() {
		let lang = l,
			messages = m;
		return (
			<IntlProvider
				locale={lang}
				messages={messages[lang]}>
				<Home />
			</IntlProvider>
		);
	}
}

export default App;
