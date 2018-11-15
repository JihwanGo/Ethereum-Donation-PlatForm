import React from "react"
import { NavLink } from 'react-router-dom'



import Loading from '../components/Loading'
import '../../css/components/Header.css'



export default class Header extends React.Component {

	static contextTypes = {
		currentUser: React.PropTypes.object
	};

	constructor(props) {
		super(props)

		this.state = {
			title: "CONATION.IO",
			// data: user,
		}
	}

	render_singin_or_my() {
		if (this.context.currentUser === undefined)
			return <Loading />
		else if (this.context.currentUser === null)
			return <NavLink className="btn btn-outline-light" activeClassName="active"
				exact to="/signin">Sign in</NavLink>
		else
			return <NavLink className="btn btn-outline-light" activeClassName="active"
				exact to="/my">My Account</NavLink>
	}


	render() {
		return (


<header id="my-header" className="navbar navbar-expand navbar-dark bg-cona-primary flex-column
	flex-md-row bd-navbar justify-content-between">

	{/* Hide on small screen */}
	<NavLink className="navbar-brand mr-0 mr-md-2 d-none d-md-block"
		exact to="/">{this.props.title}</NavLink>

	{/* Show on small screen */}
	<div className="w-100 d-block d-md-none">
		<NavLink className="navbar-brand mr-0 mr-md-2"
			exact to="/">{this.props.title}</NavLink>
		
		<span className="float-right">
			{this.render_singin_or_my()}
		</span>
    </div>

	<div className="navbar-nav-scroll">
		<ul className="navbar-nav bd-navbar-nav flex-row">
			<li className="nav-item">
				<NavLink className="nav-link" activeClassName="active"
					exact to="/streamers">Streamers</NavLink></li>
			<li className="nav-item">
				<NavLink className="nav-link" activeClassName="active"
					exact to="/comarket">Comarket</NavLink></li>
			{/*<li className="nav-item">
				<NavLink className="nav-link" activeClassName="active"
					exact to="/cona">CONA</NavLink></li>*/}
			<li className="nav-item">
				<NavLink className="nav-link" activeClassName="active"
					exact to="/whitepaper">Whitepaper</NavLink></li>
		</ul>
	</div>

	<div>
		{/* Hide on small screen */}
		<span className="d-none d-md-block">
			{this.render_singin_or_my()}
		</span>
	</div>

</header>


		)
	}
}