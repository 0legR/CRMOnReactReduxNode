import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Main from './Main';
import Home from './Home';
import App from './App';
import Settings from './menu/Settings';
import Orders from './menu/Orders';
import Files from './menu/Files';
import requireAuth from '../utils/requireAuth';
import Administrators from './users/Administrators';
import Managers from './users/Managers';
import AdministratorsCreate from './users/administrators/AdministratorsCreate';
import UserTypesIndex from './users/usertypes/UserTypesIndex';
// import UserTypesCreate from './users/usertypes/UserTypesCreate';
import UserTypeFormPage from './users/usertypes/UserTypeFormPage';


const Routs = () => 
	<Router>
		<App>
			<Route path="/" exact component={Main} />
			<Route path="/home" component={requireAuth(Home)} />
			<Route path="/settings" component={requireAuth(Settings)} />
			<Route path="/orders" component={requireAuth(Orders)} />
			<Route path="/files" component={requireAuth(Files)} />
			<Route path="/users/administrators" exact component={requireAuth(Administrators)} />
			<Route path="/users/administrators/create" exact component={requireAuth(AdministratorsCreate)} />
			<Route path="/users/managers" component={requireAuth(Managers)} />
			<Route path="/users/types" exact component={requireAuth(UserTypesIndex)} />
			<Route path="/users/types/create" exact component={requireAuth(UserTypeFormPage)} />
			<Route path="/users/types/update/:id" exact component={requireAuth(UserTypeFormPage)} />
		</App>
	</Router>;

export default Routs;
