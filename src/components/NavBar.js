import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component{
	render(){
		return(
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link to="/">merilee</Link>
					</div>
					<ul className="nav navbar-nav">
						<li>about</li>
						<li>portfolio</li>
						<li>contact</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default NavBar;