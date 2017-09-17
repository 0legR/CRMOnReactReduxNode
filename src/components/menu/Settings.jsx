import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Settings extends Component {
	render() {
		return (
			<div>
				<div>Settings</div>
				<div>
					<div className="ui block header">Main Settings</div>
					<div className="ui middle aligned divided list">
						<ul>
							<li><Link to="/usertypes">User Types</Link></li>
						</ul>
					</div>
				</div>
				<div>
					<div className="ui block header">Order`s Settings</div>
					<div className="ui middle aligned divided list">
						<ul>
							<li><Link to="/orders">Orders</Link></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Settings;