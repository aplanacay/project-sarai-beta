import React from 'react';
import classNames from 'classnames';

class Footer extends React.Component{
	render(){
		const footerClass = classNames('mdl-cell mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-col--4-col-phone')
		const sectionClass = classNames('mdl-cell--4-col-desktop mdl-cell--8-col-tablet mdl-col--4-col-phone')

		return (
			<div className="container">
				<div className={footerClass}>
					<div className="footer mdl-grid">
						<div className={sectionClass}>
							<div className="sectionTitle">
								<h4>
									About SARAI
								</h4>
							</div>
							<div className="sectionContent">
								Project SARAI aims to develop a national crop 
								forecasting and monitoring system for first six priority 
								crops: rice, corn, banana, coconut, coffee, cacao. 

							*logo
							</div>
						</div>
						<div className={sectionClass}>
							<div className="sectionTitle">
								<h4>
									Stay Connected
								</h4>
							</div>
							<div className="sectionContent">
								<p>
<<<<<<< HEAD
									<i className="material-icons">phone</i>
									+63 (049) 536 3080, 2836
								</p>
								<p>
									<i className="material-icons">email</i>
									<a className="email" href="mailto:http://sarai@uplb.edu.ph">sarai@uplb.edu.ph</a>
								</p>
								<p>
									<i className="material-icons">location_on</i>									
=======
									<i className="glyphicon glyphicon-phone-alt"></i>
									+63 (049) 536 3080, 2836
								</p>
								<p>
									*email address
									<a className="email" href="mailto:http://sarai@uplb.edu.ph">sarai@uplb.edu.ph</a>
								</p>
								<p>
									*address
>>>>>>> 3d8f968da6a515ca13b42d17f58ccf730edb8a93
									SESAM UPLB, College, Laguna Philippines 4031
								</p>
							</div>
						</div>
						<div className={sectionClass}>
							<div className="sectionTitle">
								<h4>
									Get Involved
								</h4>
							</div>
							<div className="sectionContent">
								*fb *twirrer *yt	
							</div>
						</div>
					</div>
					<div className="footer-bottom mdl-grid">
						
							<div className="bottom-bottom-left mdl-cell--6-col-desktop mdl-cell--2-col-tablet" mdl-col--2-col-phone>
								Copyright 2016 - Project SARAI
							</div>
							<div className="bottom-right mdl-cell--6-col-desktop mdl-cell--2-col-tablet mdl-cell-col--2-phone">
								Developed by SARAI Project 3
							</div>
						
					</div>
				</div>
			</div>

		)
	}
}

export default Footer;

					