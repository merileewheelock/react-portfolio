import React, { Component } from 'react';

class About extends Component{
	render(){
		return(
			<div className="page container">
				<h1 className="page-header text-center">about</h1>
				<div className="row">
					<div className="col-sm-6">
						<p>Full-stack web developer trained at <a href="http://www.digitalcrafts.com/">DigitalCrafts</a> in Atlanta, GA. I am also a proud graduate from the Georgia Institute of Technology. I recently moved to beautiful Sunnyvale, CA.</p>
					</div>
					<div className="col-sm-6">
						<p>I am passionate about organized code and clean layouts. Outside of coding, I enjoy hiking with my dog, traveling with my husband, and losing myself in books.</p>
					</div>
				</div>
				<p>Below are some of the areas in which I am trained.</p>
				<div className="row text-center skills-row">
					<div className="col-sm-3 col-xs-4">
						<div className="skill-name">aws</div>
						<i className="hidden-xs devicon-amazonwebservices-original"></i>
					</div>
					<div className="col-sm-3 col-xs-4">
						<div className="skill-name">babel</div>
						<i className="hidden-xs devicon-babel-plain"></i>
					</div>
					<div className="col-sm-3 col-xs-4">
						<div className="skill-name">bootstrap</div>
						<i className="hidden-xs devicon-bootstrap-plain"></i>
					</div>
					<div className="col-sm-3 col-xs-4">
						<div className="skill-name">css3</div>
						<i className="hidden-xs devicon-css3-plain"></i>
					</div>
					<div className="col-sm-3 col-xs-4">
						<div className="skill-name">express</div>
						<i className="hidden-xs devicon-express-original"></i>
					</div>
					<div className="col-sm-3 col-xs-4">
						<div className="skill-name">git</div>
						<i className="hidden-xs devicon-git-plain"></i>
					</div>
					<div className="col-sm-3 col-xs-4">
						<div className="skill-name">html5</div>
						<i className="hidden-xs devicon-html5-plain"></i>
					</div>
					<div className="col-sm-3 col-xs-4">
						<div className="skill-name">javascript</div>
						<i className="hidden-xs devicon-javascript-plain"></i>
					</div>
					<div className="col-sm-3 col-xs-4">
						<div className="skill-name">jquery</div>
						<i className="hidden-xs devicon-jquery-plain"></i>
					</div>
					<div className="col-sm-3 col-xs-4">
						<div className="skill-name">linux</div>
						<i className="hidden-xs devicon-linux-plain"></i>
					</div>
					<div className="col-sm-3 col-xs-4">
						<div className="skill-name">mysql</div>
						<i className="hidden-xs devicon-mysql-plain"></i>
					</div>
					<div className="col-sm-3 col-xs-4">
						<div className="skill-name">node.js</div>
						<i className="hidden-xs devicon-nodejs-plain"></i>
					</div>
					<div className="col-sm-3 col-xs-4">
						<div className="skill-name">python</div>
						<i className="hidden-xs devicon-python-plain"></i>
					</div>
					<div className="col-sm-3 col-xs-4">
						<div className="skill-name">react</div>
						<i className="hidden-xs devicon-react-original"></i>
					</div>
					<div className="col-sm-3 col-xs-4">
						<div className="skill-name">sass</div>
						<i className="hidden-xs devicon-sass-original"></i>
					</div>
					<div className="col-sm-3 col-xs-4">
						<div className="skill-name">sourcetree</div>
						<i className="hidden-xs devicon-sourcetree-plain"></i>
					</div>
				</div>
			</div>
		)
	}
}

export default About;