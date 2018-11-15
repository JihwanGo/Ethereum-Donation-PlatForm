import React from "react"


import '../../css/components/ConaWallet.css'


export default class ConaWallet extends React.Component {
	render() {
		return (



<div className="card text-white bg-secondary mb-3 ConaWallet border border-warning">
	<div className="card-body">
		<p className="text-muted"><small>{this.props.membership}</small></p>
		<div className="spacer5"></div>
		<div className="wallet-info">
			<img className="img-thumbnail rounded float-left img-qrcode" src="https://lh3.googleusercontent.com/JhlUkFmf_qYUMEV_H-WPvG_TMB7oiSY8jqqRIkzJ_cZRe0eWYIx_x59NPMX-gMpUSRZN=w170" alt="QR Code" />
			<h5 className="wallet-name">{this.props.walletname}</h5>
		</div>

		<div className="spacer15"></div>
		<div className="float-right">
		<h4 className="card-title wallet-balance">{this.props.balance} CONA</h4>
		<p className="card-text text-muted float-right"><small>(≈ ₩<span> 1,224</span>)</small></p>
		</div>
		<div className="spacer45"></div>
		<p className="card-text"><strong><small>{this.props.walletowner}</small></strong></p>
	</div>
</div>



		)
	}
}