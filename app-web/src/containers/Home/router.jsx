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
				<Route path='/' exact component={Sign}></Route>
				<Route path='/purchase' exact component={Purchase}></Route>
				<Route path='/verification' exact component={Verif}></Route>
				<Route path='/activation/:key' exact component={Sign}></Route>
			</Switch>	
		</Router>
	)
