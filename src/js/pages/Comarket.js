import React, { Component } from 'react'


import Footer from '../components/Footer'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import CardComarketItem from '../components/CardComarketItem'
import '../../css/pages/Comarket.css'



var DD = require('../dummydata');
export default class Comarket extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: "CONATION.IO",
			data: DD.data_for_comarket // TODO: Change to real DB
		}
	}

	render_CardComarketItems(data) {
		var arr = []
		Object.keys(data).forEach(function(key) {
			arr.push(data[key]);
		});
		var result = <div className="row no-gutters"> {
			arr.map(i => <CardComarketItem key={i._id} title={i.title}
				desc={i.desc} count_like={i.count_like} price={i.price} />)
		}</div>
		return result
	}

	render() {
		return (



<div className="Comarket">
	<Header title={this.state.title} />
	<SearchBar placeholder="Search for streamers" />
	<div className="spacer45"></div>


	<div className="container-fluid">
		<div className="row">
			<div className="col-12 d-flex justify-content-between">
				<h3>YOU FOLLOW</h3>
				<a className="btn btn-outline-secondary"
					href="/whitepaper">See all ({this.state.data['count_my_comarket_items']})</a>
			</div>
		</div>
		<hr/>
		{ this.render_CardComarketItems(this.state.data['following_items']) }

		<div className="spacer45"></div>


		<div className="row">
			<div className="col-12 d-flex justify-content-between">
				<h3>ALL CONA STREAMERS</h3>
				<a className="btn btn-outline-secondary"
					href="/whitepaper">See all ({this.state.data['count_all_comarket_items']})</a>
			</div>
		</div>
		<hr/>
		{ this.render_CardComarketItems(this.state.data['all_items']) }
	</div>
	<div className="spacer45"></div>

	
	<Footer />
</div>


		)
	}
}
