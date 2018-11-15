import React, { Component } from 'react'


import Footer from '../components/Footer'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import CardFeaturedStreamer from '../components/CardFeaturedStreamer'
import '../../css/pages/Streamers.css'



var DD = require('../dummydata');
export default class Streamers extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: "CONATION.IO",
			data: DD.data_for_streamers // TODO: Change to real DB
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

	render() {
		return (


<div className="Streamers">
	<Header title={this.state.title} />
	<SearchBar placeholder="Search for streamers" />
	<div className="spacer45"></div>


	<div className="container-fluid">
		<div className="row">
			<div className="col-12 d-flex justify-content-between">
				<h3>YOU FOLLOW</h3>
				<a className="btn btn-outline-secondary"
					href="/whitepaper">See all ({this.state.data['count_my_cona_streamers']})</a>
			</div>
		</div>
		<hr/>
		{ this.render_CardFeaturedStreamers(this.state.data['following_streamers']) }
		<div className="spacer45"></div>


		<div className="row">
			<div className="col-12 d-flex justify-content-between">
				<h3>ALL CONA STREAMERS</h3>
				<a className="btn btn-outline-secondary"
					href="/whitepaper">See all ({this.state.data['count_all_cona_streamers']})</a>
			</div>
		</div>
		<hr/>
		{ this.render_CardFeaturedStreamers(this.state.data['all_streamers']) }
	</div>
	<div className="spacer45"></div>
	
	<Footer />
</div>


		)
	}
}
