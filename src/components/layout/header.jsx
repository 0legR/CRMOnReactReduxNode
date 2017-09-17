import React from 'react';
import logo from '../img/logo.png';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/authActions';
import {NavLink} from 'react-router-dom';

class HomeHeader extends React.Component {
	handleLogout(e) {
		e.preventDefault();
		this.props.logout();
		this.context.router.history.push('/');
	}

	render() {
		const userLinks = (
			<div className="right menu">
				<button onClick={this.handleLogout.bind(this)} className="ui item">Logout</button>
			</div>
		);
		const mainLinks = (
			<div className="ui secondary pointing menu">
				<NavLink className="item" activeClassName="active" exact to="/settings">Settings</NavLink>
				<NavLink className="item" activeClassName="active" exact to="/orders">Orders</NavLink>
				<NavLink className="item" activeClassName="active" exact to="/files">Files</NavLink>
			</div>
		);
		return (
			<div className="ui secondary pointing menu">
				<div className="ui segment">
					<img src={logo} alt="Logo" className="item" />
					<h1 className="item">Header</h1>
				</div>
				{mainLinks}
				{userLinks}
			</div>
		);
	}
}

HomeHeader.propTypes = {
	logout: PropTypes.func.isRequired
}

HomeHeader.contextTypes = {
	router: PropTypes.object.isRequired
}

export default connect(null, {logout}, null, {pure:false})(HomeHeader);
