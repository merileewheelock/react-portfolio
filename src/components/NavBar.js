import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component{
	render(){
		return(
			<div className="navigation">
				<ul>
					<li><Link to="/">welcome</Link></li>
					<li><Link to="/about">about</Link></li>
					<li><Link to="/portfolio">portfolio</Link></li>
					<li><Link to="/contact">contact</Link></li>
				</ul>
			</div>
		)
	}
}

export default NavBar;