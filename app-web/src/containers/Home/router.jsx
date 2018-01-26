import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';

//components
import Verif from '../../components/Verif/Verif'
import Purchase from '../../components/Purchase/Purchase'
import Sign from '../../components/Sign/Sign'

export default () => 
	(
		<Router>
			<Switch>
				<Route path='/login' exact component={Login}></Route>
				<Route path='/' exact component={Main}></Route>
				<Route path='/home' exact component={Home}></Route>
				<Route path='/wk' exact component={Flow}></Route>
			</Switch>	
		</Router>
	)
