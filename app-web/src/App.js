import React, { Component } from 'react';

//components
import Home from './containers/Home/Home'
//style
import './App.css';

import { IntlProvider } from "react-intl";

let l = 'en'
let m = {
	en: {
		'countdown.day': 'DAYS',
		'countdown.hour': 'HOURS',
		'countdown.minute': 'MINUTES',
		'countdown.second': 'SECONDS',

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

		'header.title': 'PROGRESSIVE COIN SALES (VC)',
		'header.bar': 'PRE-ICO PROGRESSIVE COIN SALES (TOKENS)',
		'header.timeleft': 'TIME LEFT IN PUBLIC PRE-ICO',

		'navbar.pricing': 'PRICING',
		'navbar.faq': 'FAQ',
		'navbar.overview': 'OVERVIEW',
		'navbar.logout': 'LOGOUT',

		'contribution.using': 'PURCHASING USING',
		'contribution.wallet': 'WALLET INFORMATION',

		'alertdismissable.run': 'Take this action',
		'alertdismissable.hide': 'Hide Alert',
		'alertdismissable.show': 'Show Alert',
		'alertdismissable.or': 'or',

		'login.login.title': 'Login',
		'login.login': 'LOGIN',
		'login.email': 'Email Address',
		'login.pwd': 'Password',

		'register.register.title': 'Register',
		'register.register': 'REGISTER',
		'register.cond1.1': 'I am either not a U.S. Citizen or I am an ',
		'register.cond1.2': 'Accredited Investor',
		'register.cond2.1': 'I have read and accept the ',
		'register.cond2.2': 'White Paper',
		'register.cond3.1': 'I have read and accept the ',
		'register.cond3.2': 'SAFT',
	},
	zh: {
		'countdown.day': '天',
		'countdown.hour': '小时',
		'countdown.minute': '分钟',
		'countdown.second': '秒',

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

		'header.title': 'VOICECOIN预售进程',
		'header.bar': '已经预售出的Token数量',
		'header.timeleft': '公开预售剩余时间',

		'navbar.pricing': '价格',
		'navbar.faq': '常见问题',
		'navbar.overview': '总览',
		'navbar.logout': '登出',

		'contribution.using': '购买币种',
		'contribution.wallet': '钱包信息',

		'alertdismissable.run': '执行',
		'alertdismissable.hide': '隐藏',
		'alertdismissable.show': '显示',
		'alertdismissable.or': ' ',

		'login.login.title': '登录',
		'login.login': '登录',
		'login.email': '电子邮件',
		'login.pwd': '密码',

		'register.register.title': '用户注册',
		'register.register': '注册',
		'register.cond1.1': '我不是美国公民也不是美国',
		'register.cond1.2': '合格投资人',
		'register.cond2.1': '我已阅读并同意本项目的',
		'register.cond2.2': '白皮书',
		'register.cond3.1': '我已阅读并同意本项目的',
		'register.cond3.2': 'SAFT',
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
