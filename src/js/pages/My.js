import React, { Component } from 'react'
import { Redirect } from 'react-router'



import fire from '../../utils/fire';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Wallet from '../components/Wallet'
import TransactionsTable from '../components/TransactionsTable'
// import ConaWallet from '../components/ConaWallet'
// import '../../css/pages/My.css'


require("firebase/firestore");
// var DD = require('../dummydata');
export default class My extends Component {

	static contextTypes = {
		currentUser: React.PropTypes.object
	};

	constructor(props) {
		super(props)

		this.state = {
			title: "CONATION.IO",
			// data: DD.data_for_streamers // TODO: Change to real DB
			userInfo: undefined,
			twitchInfo: undefined,
			youtubeInfo: undefined,
		}
	}

	componentDidMount() {
		if (this.context.currentUser) {
			this.getUserInfo()
			this.getUserProviderInfo()
		}
	}

	getUserInfo() {
		var db = fire.firestore()
		var userRef = db.collection('users').doc(this.context.currentUser.uid)
		userRef.get().then((doc) => {
			if (doc.exists) {
				//alert(JSON.stringify(doc.data()))
				this.setState({userInfo: doc.data()})
			} else {
				this.setState({userInfo: null})
			}
		}).catch((error) => {
			alert("Error geting document: see log.")
			console.log("Error getting document: ", error)
		})
	}

	getUserProviderInfo() {
		this.context.currentUser.providerData.forEach(function(profile) {
			// console.log(profile)
			// console.log("Sign-in provider: " + profile.providerId);
			// console.log("  Provider-specific UID: " + profile.uid);
			// console.log("  Name: " + profile.displayName);
			// console.log("  Email: " + profile.email);
			// console.log("  Photo URL: " + profile.photoURL);

			switch(profile.providerId) {
				case "password":
					// Nothing
					break;
				case "twitch.tv":
					this.setState({twitchInfo: profile})
					break;
				case "google.com":
					this.setState({youtubeInfo: profile})
					break;
				default:
					this.setState({twitchInfo: null})
					this.setState({youtubeInfo: null})
			}
		})
	}

	handleLogoutClick() {
		// Fire Logout
		fire.auth().signOut().then(function() {
			// Sign-out successful.
			
		}).catch(function(error) {
			// An error happened.
			// Handle Errors here.
			var errorCode = error.code
			var errorMessage = error.message
			console.log(errorCode + " " + errorMessage)
			//<Redirect push to="/signin" />
		});
	}

	render_account_info() {
		return (
			<div className="card border-secondary">
				<div className="card-body text-center pb-0">
					<img className="rounded-circle mb-2" width="100" height="100" src="https://www.colorado.edu/biofrontiers/sites/default/files/styles/medium/public/people/cassidythompson_0.png?itok=FN4FLP-y" alt="Conation Account" />
					<h5 className="card-title text-secondary mb-0"><strong>Conation Account</strong></h5>
				</div>
				<div className="card-body pt-1">
					{/* Email */}
					<label className="control-label mb-0"><small><strong>EMAIL</strong></small></label>
					{this.context.currentUser.emailVerified ? (
						<button className="btn btn-link btn-sm float-right m-0 p-0 disabled" type="button" disabled>verified</button>
					) : (
						<button className="btn btn-link btn-sm float-right m-0 p-0" type="button">verify email</button>
					)}
					<input type="text" className="form-control"
						value={this.context.currentUser.email} readOnly/>
					
					{/* Password */}
					<div className="spacer10"></div>
					<label className="control-label mb-0"><small><strong>PASSWORD</strong></small></label>
					{this.context.currentUser.emailVerified ? (
						<button className="btn btn-link btn-sm float-right m-0 p-0" type="button">reset password</button>
					) : (
						<button className="btn btn-link btn-sm float-right m-0 p-0 disabled" type="button" disabled>reset password</button>
					)}
					<input type="text" className="form-control"
						value="(encrypted)" readOnly/>

					{/* Phone 
					<div className="spacer10"></div>
					<label className="control-label mb-0"><small><strong>PHONE</strong></small></label>
					<button className="btn btn-link btn-sm float-right m-0 p-0" type="button">verify phone</button>
					<input type="text" className="form-control"
						value=""/> */}

			{/*
			<p className="card-text">
				UID: {JSON.stringify(this.context.currentUser.uid)}<br/>

				DISPLAY_NAME: {JSON.stringify(this.context.currentUser.displayName)}<br/>
				PHOTO_URL: {JSON.stringify(this.context.currentUser.photoURL)}<br/>
				{JSON.stringify(this.state.userInfo)}<br/>
				{Number(60.00000000000001)}<br/>
				{Number(60.000000000000001)}<br/>

				EMAIL: {JSON.stringify(this.context.currentUser.email)}<br/>
				EMAIL_VERIFIED: {JSON.stringify(this.context.currentUser.emailVerified)}<br/>
				Password [encrypted] [reset]<br/>
				PHONE_NUMBER: {JSON.stringify(this.context.currentUser.phoneNumber)}<br/>
				LAST_LOGIN_AT: {JSON.stringify(this.context.currentUser.metadata.lastSignInTime)}<br/>
				CREATED_AT: {JSON.stringify(this.context.currentUser.metadata.creationTime)}<br/>

				JSON.stringify(this.context.currentUser.providerData)}
			</p>
			*/}
				</div>
			</div>
		)
	}

	render_twitch_info() {
		return (
			<div className="card bg-twitch-primary text-light">
				<div className="row card-body pb-1">
					<div className="col-3">
						<img className="rounded-circle mb-2" style={{width: "100%", height: "auto"}} src="https://www.colorado.edu/biofrontiers/sites/default/files/styles/medium/public/people/cassidythompson_0.png?itok=FN4FLP-y" alt="Twitch Account" />
					</div>
					<div className="col-9">
						<h5 className="card-title"><strong>Twitch Account</strong></h5>
						{this.state.twitchInfo ? (
							<h6 className="card-subtitle mb-2">this.state.twitchInfo.displayName</h6>
						) : (
							<h6 className="card-subtitle mb-2">Not Connected</h6>
						)}
					</div>
				</div>
				<hr className="m-0"/>
				{!this.state.twitchInfo ? (
					<div className="card-body">
						<button className="btn btn-lg btn-outline-light w-100">
							Conntect to Twitch</button>
					</div>
				) : (
					<div className="row card-body m-0 p-0">
						<div className="col-4 text-center">
							<p className="mb-1 mt-2"><small><strong>FOLLOWING</strong></small></p>
							<p className="mb-2">-1</p>
						</div>
						<div className="col-4 text-center" style={{borderWidth: "0 1px 0 1px", borderStyle: "solid", borderColor: "rgba(0,0,0,0.1)"}}>
							<p className="mb-1 mt-2"><small><strong>FOLLOWER</strong></small></p>
							<p className="mb-2">-1</p>
						</div>
						<div className="col-4 text-center">
							<p className="mb-1 mt-2"><small><strong>WATCHING</strong></small></p>
							<p className="mb-2">-1</p>
						</div>
					</div>
				)}
				{/*
					<div className="row">
						<button className="btn btn-lg btn-outline-light w-100">Connect my Twitch account</button>
						<div className="input-group">
							<div className="input-group-prepend">
								<div className="form-control input-group-text">
								<input type="radio" id="exampleRadios1" name="exampleRadios" value="option1" aria-label="Radio button for following text input" checked/>
								</div>
							</div>
							<label className="form-control" htmlFor="exampleRadios1">
								I am not a broadcaster.
							</label>
						</div>
						<div className="input-group">
							<div className="input-group-prepend">
								<div className="form-control input-group-text">
								<input type="radio" id="exampleRadios2" name="exampleRadios" value="option2" aria-label="Radio button for following text input" disabled/>
								</div>
							</div>
							<label className="form-control" htmlFor="exampleRadios2">
								Register me as conation streamer.
							</label>
						</div>
					</div>
				*/}
			</div>
		)
	}

	render_youtube_info() {
		return (
			<div className="card bg-youtube-primary text-light">
				<div className="row card-body pb-1">
					<div className="col-3">
						<img className="rounded-circle mb-2" style={{width: "100%", height: "auto"}} src="https://www.colorado.edu/biofrontiers/sites/default/files/styles/medium/public/people/cassidythompson_0.png?itok=FN4FLP-y" alt="Twitch Account" />
					</div>
					<div className="col-9">
						<h5 className="card-title"><strong>Youtube Account</strong></h5>
						{this.state.youtubeInfo ? (
							<h6 className="card-subtitle mb-2">this.state.youtubeInfo.displayName</h6>
						) : (
							<h6 className="card-subtitle mb-2">Not Connected</h6>
						)}
					</div>
				</div>
				<hr className="m-0"/>
				{!this.state.youtubeInfo ? (
					<div className="card-body">
						<button className="btn btn-lg btn-outline-light w-100">
							Conntect to Youtube</button>
					</div>
				) : (
					<div className="row card-body m-0 p-0">
						<div className="col-4 text-center">
							<p className="mb-1 mt-2"><small><strong>FOLLOWING</strong></small></p>
							<p className="mb-2">-1</p>
						</div>
						<div className="col-4 text-center" style={{borderWidth: "0 1px 0 1px", borderStyle: "solid", borderColor: "rgba(0,0,0,0.1)"}}>
							<p className="mb-1 mt-2"><small><strong>FOLLOWER</strong></small></p>
							<p className="mb-2">-1</p>
						</div>
						<div className="col-4 text-center">
							<p className="mb-1 mt-2"><small><strong>WATCHING</strong></small></p>
							<p className="mb-2">-1</p>
						</div>
					</div>
				)}
				{/*
					<div className="row">
						<button className="btn btn-lg btn-outline-light w-100">Connect my Youtube account</button>
						
						<div className="input-group">
							<div className="input-group-prepend">
								<div className="form-control input-group-text">
								<input type="radio" id="exampleRadios1" name="exampleRadios" value="option1" aria-label="Radio button for following text input" checked/>
								</div>
							</div>
							<label className="form-control" htmlFor="exampleRadios1">
								I am not a broadcaster.
							</label>
						</div>
						<div className="input-group">
							<div className="input-group-prepend">
								<div className="form-control input-group-text">
								<input type="radio" id="exampleRadios2" name="exampleRadios" value="option2" aria-label="Radio button for following text input" disabled/>
								</div>
							</div>
							<label className="form-control" htmlFor="exampleRadios2">
								Register me as conation streamer.
							</label>
						</div>
					</div>
				*/}
			</div>
		)
	}

	render_eth_wallet() {
		if (this.state.userInfo === undefined)
			// Loading
			return <span>(Loading User Infomation)</span>
		else if (this.state.userInfo === null)
			// 1:1 Cannot find doc
			return <span>Err: Cannot find doc</span>
		else if (this.state.userInfo && (!this.state.userInfo.wallet_eth || this.state.userInfo.wallet_eth === ""))
			// Empty Wallet (Create Button)
			return <Wallet name="empty" unit="ZZZ" />
		else if (this.state.userInfo && this.state.userInfo.wallet_eth && this.state.userInfo.wallet_eth !== "")
			return <Wallet address={this.state.userInfo.wallet_eth} name="My rETH Wallet" unit="rETH" />
	}

	render() {

		// Redirect to signin page if not logged in
		if (!this.context.currentUser)
			return <Redirect push to="/signin" />
		else {
			return (



<div className="Signout">
	<Header title={this.state.title} />

	<div className="spacer45"></div>


	<div className="container-fluid break-word" style={{maxWidth: '1240px'}}>
		<div className="row">
			<div className="col-lg-4 col-md-6">
				<h3>Account</h3>
				<hr/>
				{this.context.currentUser.emailVerified ? (
					<div className="alert alert-secondary mb-1">
						<s><strong>Step 1.</strong> Verfiy your email address. <u>Learn why.</u></s>
					</div>
				) : (
					<div className="alert alert-info mb-1">
						<strong>Step 1.</strong> Verfiy your email address. <u>Learn why.</u>
					</div>
				)}

				<div className="alert alert-secondary">
					<strong>Step 2.</strong> Connect to your existing Twitch and Youtube accounts. <u>Learn the benefits.</u>
				</div>

				{this.render_account_info()}
				<div className="spacer15"></div>
				{this.render_twitch_info()}
				<div className="spacer15"></div>
				{this.render_youtube_info()}
				<div className="spacer45"></div>
			</div>
			<div className="col-lg-4 col-md-6">
				<h3>Wallets</h3>
				<hr/>
				<div className="alert alert-secondary mb-1">
					<strong>Step 3.</strong> Create an ethereum wallet. <u>Learn more.</u>
				</div>
				<div className="alert alert-secondary">
					<strong>Step 4.</strong> Create a cona wallet. <u>Learn more.</u>
				</div>

				{this.render_eth_wallet()}
				
				<div className="spacer45"></div>
			</div>
			<div className="col-lg-4 col-md-12">
				<h3>Transactions</h3>
				<hr/>

				<TransactionsTable currencyFilter={["eth", "cona"]} ioFilter={0} limitFilter={5} />

				<button type="button" className="btn btn-outline-secondary float-right"
					onClick={this.handleLogoutClick}>See more</button>



				<div className="spacer45"></div>
				<h3>ETC</h3>
				<hr/>
				<button className="btn btn-lg btn-outline-secondary w-100">
				Whitepaper</button>
				<button className="btn btn-lg btn-outline-secondary w-100">
				FAQ</button>
				<button className="btn btn-lg btn-outline-secondary w-100">
				Download App</button>
				<button className="btn btn-lg btn-outline-secondary w-100">
				Overlay Tool for Streamers</button>
				<button className="btn btn-lg btn-outline-secondary w-100"
					onClick={this.handleLogoutClick}>Logout</button>
			</div>
		</div>


		<div className="spacer45"></div>
	</div>
	<div className="spacer15"></div>
	
	<Footer />
</div>

			)
		}
	}
}
