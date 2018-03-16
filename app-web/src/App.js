import React, { Component } from 'react';

//components
import Home from './containers/Home/Home'
//style
import './App.css';

import { IntlProvider } from "react-intl";

let l = 'en'
let m = {
	en: {
		'navbar.pricing': 'PRICING',
		'navbar.faq': 'FAQ',
		'navbar.overview': 'OVERVIEW',
		'navbar.logout': 'LOGOUT',
		'footer.aboutus': 'ABOUT US',
		'footer.description': 'Voiceweb blockchain works for decentralized voice internet,  blockchain and artificial intelligence technologies. Next generation world wide web.',		
		'footer.papers': 'PAPERS',		
		'footer.teaser': 'Teaser',		
		'footer.primer': 'Primer',		
		'footer.proofofmajority': 'Proof of Majority',		
		'footer.documents': 'DOCUMENTS',		
		'footer.whitepaper': 'White Paper',		
		'footer.gist': 'GIST',		
		'footer.contact': 'CONTACT',		
		'footer.voiceweb': 'Voiceweb Foundation',		
		'footer.copyright': 'All Rights Reserved.',		
		'footer.privacy': 'Privacy Policy',		
		'footer.termsofuse': 'Terms of Use',		
	},
	zh: {
		'navbar.pricing': '价格',
		'navbar.faq': '常见问题',
		'navbar.overview': '总览',
		'navbar.logout': '登出',
		'footer.aboutus': '关于我们',	
		'footer.description': '语音网络链是去中心化语音网络与区块链技术和人工智能相结合的产品。是次时代的万维网。',	
		'footer.papers': 'PAPERS',		
		'footer.teaser': 'Teaser',		
		'footer.primer': 'Primer',		
		'footer.proofofmajority': '工作量证明',		
		'footer.documents': '相关文档',		
		'footer.whitepaper': '白皮书',		
		'footer.gist': '纲要',	
		'footer.contact': '联系我们',	
		'footer.voiceweb': '语音网基金会',		
		'footer.copyright': '版权所有',		
		'footer.privacy': '隐私声明',		
		'footer.termsofuse': '使用条例',	
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
