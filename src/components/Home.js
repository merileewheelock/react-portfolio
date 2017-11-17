import React, { Component } from 'react';

class Home extends Component{
	render() {
		return(
			<div className="main-page container">
				<div className="row welcome">
					<div className="welcome-msg1 col-md-12 hidden-xs">
						HELLO,
					</div>
					<div className="welcome-msg2 col-md-12">
						I'M MERILEE
					</div>
				</div>
				<div className="row">
					<div className="welcome-info col-md-12">
						Full-Stack Web Developer | Sunnyvale, CA
					</div>
				</div>
			</div>
		)
	}
}

export default Home;