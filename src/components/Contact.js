import React, { Component } from 'react';

class Contact extends Component{
	render(){
		return(
			<div className="page container">
				<div className="contact-section">
					<h1 className="page-header text-center">want to know more?</h1>
					<div className="row text-center">
						<div className="col-sm-3 col-xs-6">
							<a href="mailto:merilee.wheelock@gmail.com" className="fa fa-envelope fa-5x"></a>
							<div className="contact-name">email</div>
						</div>
						<div className="col-sm-3 col-xs-6">
							<a href="https://www.linkedin.com/in/merilee-wheelock-5337b86b" target="_blank" className="fa fa-linkedin fa-5x"></a>
							<div className="contact-name">linkedin</div>
						</div>
						<div className="col-sm-3 col-xs-6">
							<a href="https://github.com/merileewheelock" target="_blank" className="fa fa-github fa-5x"></a>
							<div className="contact-name">github</div>
						</div>
						<div className="col-sm-3 col-xs-6">
							<a href="./assets/images/MerileeWheelock_Resume.pdf" target="_blank" className="fa fa-file fa-5x"></a>
							<div className="contact-name">resume</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact;