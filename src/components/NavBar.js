import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component{
	render(){
		return(
			<div className="navigation">
				<ul>
					<li className="nav-item"><Link to="/">welcome</Link></li>
					<li className="nav-item"><Link to="/about">about</Link></li>
					<li className="nav-item"><Link to="/portfolio">portfolio</Link></li>
					<li className="nav-item"><Link to="/contact">contact</Link></li>
				</ul>
			</div>
		)
	}
}

export default NavBar;