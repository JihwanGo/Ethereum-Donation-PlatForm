import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


import Footer from '../components/Footer'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import CardFeaturedStreamer from '../components/CardFeaturedStreamer'
import CardComarketItem from '../components/CardComarketItem'
import '../../css/pages/Home.css'



var DD = require('../dummydata');
export default class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: "CONATION.IO",
			data: DD.data_for_home // TODO: Change to real DB
		}
	}

	render_CardFeaturedStreamers(data) {
		var arr = []
		Object.keys(data).forEach(function(key) {
			arr.push(data[key]);
		});
		var result = <div className="row no-gutters"> {
			arr.map(i => <CardFeaturedStreamer key={i._id}
				streamer={i.streamer} msg={i.msg} status={i.status} />)
		}</div>
		return result
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


<div className="Home">
	<Header title={this.state.title} />
	<SearchBar placeholder="Search for streamers" />

	<div className="jumbotron">
		<h1 className="display-4 amtn1">The way to support,</h1>
		<h1 className="display-4 amtn2">A reason to stream.</h1>
		<p className="lead">
			<span className="amtn3">
				<i className="far fa-user"></i>
				<span> {DD._nwc(this.state.data['count_total_users'])}</span>
					{' '}users strong,{' '}
			</span>
			<br className="d-block d-sm-none"/>
			<span className="amtn3">
				<i className="fab fa-gg"></i>
				<span> {DD._nwc(this.state.data['count_total_conas'])}</span>
					{' '}sent. (≈ ₩<span> {DD._nwc(Math.round(this.state.data['cona_exrate'] * this.state.data['count_total_conas']))}</span>)
			</span>
		</p>
		<hr className="my-4" />
		<div className="amtn3">
			<p><i className="fab fa-gg"></i> is a currency used to support your favourite streamers.</p>
			<p className="lead">
				<NavLink className="btn btn-outline-secondary btn-lg amtn3"
					exact to="/whitepaper">Learn more</NavLink></p>
		</div>
	</div>



	<div className="spacer45"></div>




	<div className="container-fluid">
		<div className="row">
			<div className="col-12 d-flex justify-content-between">
				<h3>FEATURED STREAMER</h3>
				<a className="btn btn-outline-secondary"
					href="/whitepaper">See all ({this.state.data['count_all_cona_streamers']})</a>
			</div>
		</div>
		<hr/>
		{ this.render_CardFeaturedStreamers(this.state.data['featured_streamers']) }



		<div className="spacer45"></div>



		<div className="row">
			<div className="col-12 d-flex justify-content-between">
				<h3>COMARKET</h3>
				<a className="btn btn-outline-secondary"
					href="/whitepaper">See all ({this.state.data['count_all_comarket_items']})</a>
			</div>
		</div>
		<hr/>
		{ this.render_CardComarketItems(this.state.data['comarket_items']) }


		<div className="spacer45"></div>


	</div>
	<Footer />
</div>


		)
	}
}

