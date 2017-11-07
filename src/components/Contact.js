import React, { Component } from 'react';

class Contact extends Component{
	render(){
		return(
			<div className="page container">
				<div class="contact-section">
					<h1 class="page-header text-center">want to know more?</h1>
					<div class="row text-center">
						<div class="col-sm-3 col-xs-6">
							<a href="mailto:merilee.wheelock@gmail.com" class="fa fa-envelope fa-5x"></a>
							<div class="contact-name">email</div>
						</div>
						<div class="col-sm-3 col-xs-6">
							<a href="https://www.linkedin.com/in/merilee-wheelock-5337b86b" target="_blank" class="fa fa-linkedin fa-5x"></a>
							<div class="contact-name">linkedin</div>
						</div>
						<div class="col-sm-3 col-xs-6">
							<a href="https://github.com/merileewheelock" target="_blank" class="fa fa-github fa-5x"></a>
							<div class="contact-name">github</div>
						</div>
						<div class="col-sm-3 col-xs-6">
							<a href="./assets/images/MerileeWheelock_Resume.pdf" target="_blank" class="fa fa-file fa-5x"></a>
							<div class="contact-name">resume</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact;