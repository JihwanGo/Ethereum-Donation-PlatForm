import React, { Component } from 'react'


import fire from '../../utils/fire';
// import '../../css/components/TransactionsTable.css'



// var DD = require('../dummydata');
export default class TransactionsTable extends Component {

	static contextTypes = {
		currentUser: React.PropTypes.object
	};

	constructor(props) {
		super(props)

		this.state = {
			title: "CONATION.IO",
			transactionsInfo: null,
		}
	}


	componentDidMount() {
		if (this.context.currentUser) {
			this.getTransactionsInfo()
		}
	}

	getTransactionsInfo() {
		var db = fire.firestore()
		
		// alert(this.props.ioFilter)

		// FILTERS
		// eslint-disable-next-line
		var qAddress = this.props.adress
		var ethTableName = "trxns_" + this.props.currencyFilter[0] // ETH
		var trxnsRef = db.collection(ethTableName)
		var qLimit = this.props.LimitFilter ? this.props.LimitFilter : 5


		// ALL(0), IN(1), OUT(2)
		trxnsRef
		.where("from", "==", "0xefd2ae502f3cf64b009634e23301acb620c53f62")
		.limit(qLimit)
		.get().then((querySnapshot) => {
			// var data = []
			// this.setState({transactionsInfo: querySnapshot})
			// querySnapshot.forEach(function(doc) {
			// 	//console.log(doc.id, " => ", doc.data());
			// 	data.push(doc.data())
			// });
			this.setState({transactionsInfo: querySnapshot})
			// alert(this.state.transactionsInfo)
		})
		.catch(function(error) {
			console.log("Error getting documents: ", error);
		});

	}

	render_transactionsInfo() {
		if (this.state.transactionsInfo) {
			var trxns = []
			this.state.transactionsInfo.forEach(function(doc) {
				// var data = doc.data()
				// data.timestamp
				// data.amount
				// data.unit
				// data.msg
				// data.trxn_hash
				// alert(doc.data().timestamp)
				// console.log(doc.id, " => ", doc.data())
				trxns.push(<TransactionRow key={doc.id} data={doc.data()} />)
			})
			return <tbody>{trxns}</tbody>
		} else {
			return <tbody></tbody>
		}
		// querySnapshot.forEach(function(doc) {
		// 	console.log(doc.id, " => ", doc.data());
		// });
	}

	render() {
		return (

<table className="table table-hover table-sm">
	<thead className="thead-dark">
		<tr>
		<th scope="col">#</th>
		<th scope="col">Currency</th>
		<th scope="col">Type</th>
		<th scope="col">Amount</th>
		<th scope="col">D</th>
		</tr>
	</thead>
	{this.render_transactionsInfo()}
</table>

		)
	}
}

const TransactionRow = ({data}) => (

<tr>
<th scope="row">1</th>
<td>{data.unit}</td>
<td>{data.io}</td>
<td>{data.amount}</td>
<td>{data.msg}</td>
</tr>

)



// const TableRow = ({row}) => (

// <tr>
// <td>{row.timestamp}asd</td>
// <td>{row.unit}sad</td>
// <td>{row.io}sd</td>
// <td>{row.amount}asd</td>
// <td>{row.etc}asd</td>
// </tr>

// )
// <TransactionRow timestamp="1 min" unit="rETH" io="OUT" amount={2.5} etc="" />





