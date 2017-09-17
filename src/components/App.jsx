import React, {Component} from 'react';
import Footer from './layout/footer';
import FlashMessageList from './layout/flashMessageList';
import HomeHeader from './layout/header';
import {MainHeader} from './layout/MainHeader';


export default class App extends Component {
	render() {
		const Header = window.location.pathname === "/" ? <MainHeader /> : <HomeHeader />;

		return (
			<div className="ui container">
				{Header}
				<FlashMessageList />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}
