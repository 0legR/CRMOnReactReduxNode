import React from 'react';
import logo from '../img/logo.png';
import Login from '../login';

export const MainHeader = () => 
	<div className="ui block header">
		<img src={logo} alt="Logo" className="ui medium circular image header-block" />
		<h1 className="header-block">Header</h1>
		<Login />
	</div>;
