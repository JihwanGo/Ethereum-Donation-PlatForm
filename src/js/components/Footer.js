import React from "react"


import '../../css/components/Footer.css'


export default class Footer extends React.Component {
	render() {
		return (



<footer className="footer bg-cona-primary">
<div className="container-fluid">
	<div className="row footer-content">
		<div className="col-sm-12">
			<h4 className="title">CONATION.IO</h4>
			<p>the way to support, a reason to stream.</p>
		</div>
		<div className="col-sm-12">
			<ul className="social-icon">
			<a href="#" className="social"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
			<a href="#" className="social"><i className="fab fa-twitter" aria-hidden="true"></i></a>
			<a href="#" className="social"><i className="fab fa-instagram" aria-hidden="true"></i></a>
			<a href="#" className="social"><i className="fab fa-youtube" aria-hidden="true"></i></a>
			<a href="#" className="social"><i className="fab fa-twitch" aria-hidden="true"></i></a>
			<a href="#" className="social"><i className="fab fa-google-plus-g" aria-hidden="true"></i></a>
			</ul>
		</div>
	</div>
	<div className="row bg-secondary footer-bottom">
		<div className="col-sm-12">
			{/* Language Selection Button */}
			<div className="btn-group mr-3">
				<button type="button" className="btn btn-outline-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				English
				</button>
				<div className="dropdown-menu">
				<a className="dropdown-item" href="#">한국어</a>
				<a className="dropdown-item" href="#">日本語</a>
				</div>
			</div>
			<span className="footer-links">
				<a className="text-white" href="#">Privacy</a>
				<a className="text-white devsite-utility-footer-link" href="#">Terms</a>
				<a className="text-white devsite-utility-footer-link" href="#">© 2018 Shark.</a>
			</span>
			{/* © 2018 Shark. All rights reserved.</span> */}
		</div>
	</div>
</div>
</footer>



		);
	}
}