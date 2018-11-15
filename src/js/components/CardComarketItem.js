import React from "react"


import '../../css/components/CardComarketItem.css'


export default class CardComarketItem extends React.Component {
	render() {
		return (



<div className="col-6 col-sm-3 col-xl-2 CardComarketItem">
	<div className="card">
		<img className="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_161b0f415c3%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_161b0f415c3%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.4296875%22%20y%3D%2296.6%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card cap 1" />
		<div className="card-body">
			<div className="one-liner">
				<h5 className="card-title">{this.props.title}</h5>
				<p className="card-text d-none d-sm-block">{this.props.desc}</p>
			</div>
			<p className="card-text">
				<small className="text-muted"><i className="fas fa-heart" data-fa-transform="shrink-1 down-1"></i> {this.props.count_like}</small>
				{' '}
				<small className="text-muted"><i className="fab fa-gg"></i> {this.props.price}</small>
			</p>
		</div>
	</div>
	<div className="spacer5"></div>
</div>



		)
	}
}