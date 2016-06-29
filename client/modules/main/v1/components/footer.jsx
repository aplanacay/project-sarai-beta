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

								<p>
									<img id="dost_pccarrd_uplb" alt="dost_pccarrd_uplb logo" src="images/footer/DOST_PCAARRD_UPLB.png" />
								</p>
							</div>
						</div>
						<div className={sectionClass}>
							<div className="sectionTitle">
								<h4>
									Stay Connected
								</h4>
							</div>
							<div className="sectionContent">
								<div className="btn-round">
									<div className="btn-span">
										<i className="material-icons">phone</i>
									</div>										
								</div>
								+63 (049) 536 3080, 2836 <br />
								<div className="btn-round">
									<div className="btn-span">
										<i className="material-icons">email</i>
									</div>										
								</div>									
								<a className="email" href="mailto:http://sarai@uplb.edu.ph">sarai@uplb.edu.ph</a> <br />
								<div className="btn-round">
									<div className="btn-span">
										<i className="material-icons">location_on</i>
									</div>
								</div>					
								SESAM UPLB, College, Laguna Philippines 4031 <br />
							</div>
						</div>
						<div className={sectionClass}>
							<div className="sectionTitle">
								<h4>
									Get Involved
								</h4>
							</div>
							<div className="sectionContent socialMedia">
								<div className="btn-round">
									<a href="https://www.facebook.com/projectsarai/" className="facebook" target="_blank" title="facebook">
										<div className="btn-span">									
											<img src="images/common/facebook.svg"></img>										
										</div>
									</a>
								</div>
								<div className="btn-round">
									<a href="https://twitter.com/ProjectSARAI" className="twitter" target="_blank" title="twitter">
										<div className="btn-span">
											<img src="images/common/twitter.svg"></img>
										</div>
									</a>
								</div>
								<div className="btn-round">
									<a href="https://www.youtube.com/channel/UCJtzNfVmoqFZGCF326VaTZw" className="youtube" target="_blank" title="youtube">
										<div className="btn-span">
											<img src="images/common/youtube-play-button.svg"></img>
										</div>
									</a>
								</div>
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

					