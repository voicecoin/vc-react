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
import Pricing from '../../components/Pricing/Pricing'

export default () => 
	(
		<Router>
			<Switch>
				<Route path='/' exact component={Sign}></Route>
				<Route path='/pricing' exact component={Pricing}></Route>
				<Route path='/purchase' exact component={Purchase}></Route>
				<Route path='/purchase/cn' exact render={()=><Purchase num="2"/>}></Route>
				<Route path='/verification' exact component={Verif}></Route>
				<Route path='/activation/:key' exact component={Sign}></Route>
			</Switch>	
		</Router>
	)
