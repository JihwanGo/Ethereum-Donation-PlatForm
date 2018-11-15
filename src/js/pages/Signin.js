import React, { Component } from 'react'
import { Redirect } from 'react-router'


import fire from '../../utils/fire';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loading from '../components/Loading'
import '../../css/pages/Signin.css'



// var DD = require('../dummydata');
export default class Signin extends Component {

	static contextTypes = {
		currentUser: React.PropTypes.object
	};

	constructor(props) {
		super(props)

		this.state = {
			title: "CONATION.IO",
			// data: DD.data_for_streamers // TODO: Change to real DB
			isLoading: false,
		}
	}

	onFormSubmit =(event) => {
		// TODO: Front Check
		// Length 0 < x, 6 < x
		// Valid Email
		const email = event.target.theEmail.value
		const password = event.target.thePassword.value

		// do stuff
		// console.log('Email:', email)
		// console.log('Password:', password)
		this.setState({ isLoading: true })
		fire.auth().signInWithEmailAndPassword(email, password)
		.then((user) => {
			this.setState({ isLoading: false })
			// var user = fire.auth().currentUser;
			// alert("Welcome: " + JSON.stringify(user))
			// logUser(user); // Optional
		}, (error) => {
			this.setState({ isLoading: false })
			// Handle Errors here.
			var errorCode = error.code
			var errorMessage = error.message
			// console.log(errorCode)
			// console.log(errorMessage)
			switch(errorCode) {
				case 'auth/invalid-email':
					alert('Invalid email.')
					// TODO: Highlight Email + Display Message
					break;
				case 'auth/user-disabled':
					alert('User disabled.')
					break;
				case 'auth/user-not-found':
					alert('User not found.')
					// TODO: Go to or expand to or Suggest Register
					break
				case 'auth/wrong-password':
					alert('Wrong password.')
					// TODO: Highlight Password Input/Forgot password? + Display Message
					break
				default:
					alert('Authentication failed: ' + errorCode)
					console.log(errorMessage)
			}
		})
		return false
	};


	render() {
		// Redirect to my page if logged in
		if (this.context.currentUser != null)
			return <Redirect push to="my" />
		else return (


<div className="Signin">
	<Header title={this.state.title} />
	{this.state.isLoading && <Loading />}
	<div className="spacer45"></div>


	<div className="container-fluid" style={{maxWidth:'480px'}}>
		<form onSubmit={ this.onFormSubmit } target="dummyframeSignIn">
			<div className="row">
				<div className="col-12">
					<h3>Sign in</h3>
					<hr/>
					<div className="form-group">
						<div className="parent-input-with-icon">
							<i className="far fa-user icon-before-input"></i>
							<input type="email" className="form-control input-after-icon"
								placeholder="Enter email" name="theEmail"/>
						</div>
						<div className="parent-input-with-icon t--1">
							<i className="fas fa-lock icon-before-input"></i>
							<input type="password" className="form-control input-after-icon"
								placeholder="Enter password" name="thePassword"/>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<button type="submit" className="btn btn-lg btn-outline-secondary w-100">Let's go.</button>
				</div>
			</div>
			<div className="spacer15"></div>
			<div className="text-center">
				<a href="#" className="btn btn-link btn-sm text-muted">Forgot password?</a>
			</div>
		</form>
		<iframe width="0" height="0" name="dummyframeSignIn" className="d-none"></iframe>
		<div className="spacer45"></div>

		{/* Need an Account?*/}
		<div className="row">
			<div className="col-12">
				<h3>Need account?</h3>
				<hr/>
			</div>
		</div>
	{/* <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    </div> */}

		<div className="row no-gutters">
			<div className="col-md-4">
				<button className="btn btn-lg btn-outline-secondary w-100"><small>Streamer</small></button>
			</div>
			<div className="col-md-4">
				<button className="btn btn-lg btn-outline-secondary w-100"><small>Donator</small></button>
			</div>
			<div className="col-md-4">
				<button className="btn btn-lg btn-outline-secondary w-100"><small>Just Looking</small></button>
			</div>
		</div>
		<div className="row">
			<div className="col-12">
				<small className="text-muted">Trust me. It doesn't matter what you choose.</small>
			</div>
		</div>
		<div className="spacer45"></div>
	</div>
	<div className="spacer45"></div>
	
	<Footer />
</div>


		)
	}
}
