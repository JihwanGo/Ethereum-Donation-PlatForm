import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, BrowserRouter, Route } from 'react-router-dom'



import fire from './utils/fire';
import Home from './js/pages/Home'
import Streamers from './js/pages/Streamers'
import Comarket from './js/pages/Comarket'

// import SimpleCona from './js/pages/SimpleCona'
import Whitepaper from './js/pages/Whitepaper'
import Signin from './js/pages/Signin'
import My from './js/pages/My'


import './index.css'



const app_root = document.getElementById('root')

class ContextProvider extends React.Component {

	// TODO: USER REDUX
	static childContextTypes = {
		currentUser: React.PropTypes.object,
		// db: React.PropTypes.object,
	}

	constructor(props) {
		super(props);
		this.state = {currentUser: undefined}
	}

	getChildContext() {
		return {currentUser: this.state.currentUser}
	}

	componentWillMount() {

		fire.auth().onAuthStateChanged((user) => {
			if (user) {
				// User is signed in.
				// alert(JSON.stringify(user))
				this.setState({ currentUser: user }, () => {
					// alert("Index User")
					// console.log(this.state.currentUser)
				})
			} else {
				// No user is signed in (null).
				this.setState({ currentUser: user }, () => {
					// alert("Index No User")
					// console.log(this.state.currentUser)
				})
			}
		})
	}

	render() {
		return(
<BrowserRouter>
	<Switch>
		<Route exact path="/" name="home" component={Home} />
		<Route exact path="/streamers" name="cona" component={Streamers} />
		<Route exact path="/comarket" name="cona" component={Comarket} />
		{/*<Route exact path="/cona" name="cona" component={SimpleCona} />*/}
		<Route exact path="/whitepaper" name="whitepaper" component={Whitepaper} />
		<Route exact path="/signin" name="signin" component={Signin} />
		<Route exact path="/my" name="my" component={My} />

		<Route render={() => <h1>Page not found</h1>} />
	</Switch>
</BrowserRouter>
		)
	}
}

ReactDOM.render(<ContextProvider />, app_root);
