import React from "react"


import '../../css/components/SearchBar.css'


export default class SearchBar extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			search: '',
		};
		this.handleSearchChange = this.handleSearchChange.bind(this)
	}

	handleSearchChange(event) {
		this.setState({ search: event.target.value }, () => {
			console.log(this.state.search)
		})
	}

	render() {
		return (


<div className="SearchBar bg-secondary parent-input-with-icon">
	<i className="fas fa-search text-light icon-before-input"></i>
	<input className="search-box w-100 bg-secondary text-white position-relative t--1"
		type="search" placeholder={`${this.props.placeholder}`}
		onChange={this.handleSearchChange}
		value={this.state.search} />
</div>

		)
	}
}

/*
AppButton.propTypes = {
  message: PropTypes.string,
  onClick: PropTypes.func
};

AppButton.defaultProps = {
  message: 'Hello',
  onClick: function(){ alert("Hello"); }
};

export default SearchBar
*/