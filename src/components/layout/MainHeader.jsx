import React from 'react';
import logo from '../img/logo.png';
import Login from '../login';
import header from '../../le/eng/layout/header';

export const MainHeader = () => 
	<div className="ui block header">
		<div className="ui container">
			<img src={logo} alt={header.logoAlt} className="ui medium circular image header-block" />
			<h1 className="header-block">{header.logoHeader}</h1>
			<Login />
		</div>
	</div>;
