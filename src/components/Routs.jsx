import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Main from './Main';
import Home from './Home';
import App from './App';
import Settings from './menu/Settings';
import Orders from './menu/Orders';
import Files from './menu/Files';
import requireAuth from '../utils/requireAuth';

const Routs = () => 
	<Router>
		<App>
			<Route path="/" exact component={Main} />
			<Route path="/home" component={requireAuth(Home)} />
			<Route path="/settings" component={requireAuth(Settings)} />
			<Route path="/orders" component={requireAuth(Orders)} />
			<Route path="/files" component={requireAuth(Files)} />
		</App>
	</Router>;

export default Routs;
