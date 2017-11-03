import React, { Component } from 'react';

class About extends Component{
	render(){
		return(
			<div className="page">
				<h1>About</h1>
				<p>Full-stack web developer trained at <a href="http://www.digitalcrafts.com/">DigitalCrafts</a> in Atlanta, GA. I am also a proud graduate from the Georgia Institute of Technology. I recently moved to beautiful Sunnyvale, CA.</p>
				<p>I am passionate about organized code and clean layouts. Outside of coding, I enjoy hiking with my dog, traveling with my husband, and losing myself in books.</p>
				<p>Below are some of the areas in which I am trained.</p>
				<div class="row text-center skills-row">
					<div class="col-sm-3 col-xs-4">
						<div class="skill-name">aws</div>
						<i class="hidden-xs devicon-amazonwebservices-original"></i>
					</div>
					<div class="col-sm-3 col-xs-4">
						<div class="skill-name">babel</div>
						<i class="hidden-xs devicon-babel-plain"></i>
					</div>
					<div class="col-sm-3 col-xs-4">
						<div class="skill-name">bootstrap</div>
						<i class="hidden-xs devicon-bootstrap-plain"></i>
					</div>
					<div class="col-sm-3 col-xs-4">
						<div class="skill-name">css3</div>
						<i class="hidden-xs devicon-css3-plain"></i>
					</div>
					<div class="col-sm-3 col-xs-4">
						<div class="skill-name">express</div>
						<i class="hidden-xs devicon-express-original"></i>
					</div>
					<div class="col-sm-3 col-xs-4">
						<div class="skill-name">git</div>
						<i class="hidden-xs devicon-git-plain"></i>
					</div>
					<div class="col-sm-3 col-xs-4">
						<div class="skill-name">html5</div>
						<i class="hidden-xs devicon-html5-plain"></i>
					</div>
					<div class="col-sm-3 col-xs-4">
						<div class="skill-name">javascript</div>
						<i class="hidden-xs devicon-javascript-plain"></i>
					</div>
					<div class="col-sm-3 col-xs-4">
						<div class="skill-name">jquery</div>
						<i class="hidden-xs devicon-jquery-plain"></i>
					</div>
					<div class="col-sm-3 col-xs-4">
						<div class="skill-name">linux</div>
						<i class="hidden-xs devicon-linux-plain"></i>
					</div>
					<div class="col-sm-3 col-xs-4">
						<div class="skill-name">mysql</div>
						<i class="hidden-xs devicon-mysql-plain"></i>
					</div>
					<div class="col-sm-3 col-xs-4">
						<div class="skill-name">node.js</div>
						<i class="hidden-xs devicon-nodejs-plain"></i>
					</div>
					<div class="col-sm-3 col-xs-4">
						<div class="skill-name">python</div>
						<i class="hidden-xs devicon-python-plain"></i>
					</div>
					<div class="col-sm-3 col-xs-4">
						<div class="skill-name">react</div>
						<i class="hidden-xs devicon-react-original"></i>
					</div>
					<div class="col-sm-3 col-xs-4">
						<div class="skill-name">sass</div>
						<i class="hidden-xs devicon-sass-original"></i>
					</div>
					<div class="col-sm-3 col-xs-4">
						<div class="skill-name">sourcetree</div>
						<i class="hidden-xs devicon-sourcetree-plain"></i>
					</div>
				</div>
			</div>
		)
	}
}

export default About;