import React, { Component } from 'react';

class Portfolio extends Component{
	render(){
		return(
			<div className="page container">
				<h1 className="page-header text-center">portfolio</h1>
				<p className="project-text">Below are the projects that I am most proud of. Visit my <a href="https://github.com/merileewheelock" target="_blank">Github</a> profile to see more of my code.</p>

				<div className="row">
					<div className="project-box col-md-6">
						<div className="project-img text-center">
							<a href="http://cycslope.merileewheelock.com/"><img src="./assets/images/cycSlope-title.png" /></a>
						</div>
						<div className="project-text text-center">
							<p>Bicycle route planning web application for bikers looking to choose routes based on elevation change.</p>
							<p className="hidden-xs">Technologies: Node.js, MySQL, AJAX, Express, jQuery, EJS, CSS, Bootstrap, Google Maps API</p>
							<p><a href="https://github.com/merileewheelock/cycSlope" target="_blank">cycSlope on Github</a></p>
						</div>
					</div>

					<div className="project-box col-md-6">
						<div className="project-img text-center">
							<a href="http://traveList.merileewheelock.com/"><img src="./assets/images/travelist-title.png" /></a>
						</div>
						<div className="project-text text-center">
							<p>A web application designed to help travelers stay organized and prepared during all types of travel.</p>
							<p className="hidden-xs">Technologies: React, Redux, Express, Node.js, MySQL, Javascript, jQuery, Booststrap, CSS, SASS</p>
							<p><a href="https://github.com/merileewheelock/traveList" target="_blank">traveList on Github</a></p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Portfolio;