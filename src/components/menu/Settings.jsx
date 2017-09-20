import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Settings extends Component {
	render() {
		return (
			<div>
				<div className="ui block header">Settings</div>
				<div>
					<div className="ui block header header-settings">Staff Management</div>
					<div className="ui middle aligned divided list">
						<ul>
							<li><Link to="/users/administrators">Administrators</Link></li>
							<li><Link to="/users/managers">Managers</Link></li>
						</ul>
					</div>
				</div>
				<div>
					<div className="ui block header header-settings">Directory Management</div>
					<div className="ui middle aligned divided list">
						<ul>
							<li><Link to="/users/types">User Types</Link></li>
							<li><Link to="/orders">Orders</Link></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Settings;