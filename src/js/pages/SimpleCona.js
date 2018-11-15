import React, { Component } from 'react'



// import SimpleStorageContract from '../../../build/contracts/SimpleStorage.json'
import getWeb3 from '../../utils/getWeb3'

import Footer from '../components/Footer'
import Header from '../components/Header'
import ConaWallet from '../components/ConaWallet'
import '../../css/pages/SimpleCona.css'

export default class SimpleCona extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: "CONATION.IO",
			storageValue: 0,
			web3: null,
			accounts_info: null,
		}
	}

	componentWillMount() {
		// Get network provider and web3 instance.
		// See utils/getWeb3 for more info.

		getWeb3
		.then(results => {
			this.setState({
				web3: results.web3
			})

			// Instantiate contract once web3 provided.
			//this.instantiateContract()
			console.log("Before")
			console.log(this.state.accounts_info)
			this.getAccountInfo()
			console.log("After")
			console.log(this.state.accounts_info)
		})
		.catch(() => {
			console.log('Error finding web3.')
		})
	}

	// instantiateContract() {
	//   /*
	//    * SMART CONTRACT EXAMPLE
	//    *
	//    * Normally these functions would be called in the context of a
	//    * state management library, but for convenience I've placed them here.
	//    */
	//   console.log("instantiateContract")
	//   const contract = require('truffle-contract')
	//   const simpleStorage = contract(SimpleStorageContract)
	//   simpleStorage.setProvider(this.state.web3.currentProvider)

	//   // Declaring this for later so we can chain functions on SimpleStorage.
	//   var simpleStorageInstance
	//   console.log(simpleStorageInstance)

	//   // Get accounts.
	//   // this.state.web3.eth.getAccounts((error, accounts) => {
	//   //   console.log(error);
	//   //   console.log(accounts);
	//   // });
	//   this.state.web3.eth.getAccounts((error, accounts) => {
	//     // console.log(JSON.stringify(accounts));
	//     this.setState({ accounts: accounts })
	//     console.log(this.accounts)
	//     simpleStorage.deployed().then((instance) => {
	//       simpleStorageInstance = instance

	//       // Stores a given value, 5 by default.
	//       // console.log(JSON.stringify(accounts[0]));
	//       // var xxx = simpleStorageInstance.set(5, {from: accounts[0]})
	//       // console.log(JSON.stringify(xxx));
	//       // return xxx
	//       //// return simpleStorageInstance.set(5, {from: accounts[0]})
	//     }).then((result) => {
	//       // Get the value from the contract to prove it worked.
	//       // console.log(JSON.stringify(result));
	//       //// return simpleStorageInstance.get.call(accounts[0])
	//     }).then((result) => {
	//       // Update state with the result.
	//       // console.log(JSON.stringify(result));
	//       //// return this.setState({ storageValue: result.c[0] })
	//     })
	//   })
	// }
	getAccountInfo() {
		console.log("getAccountInfo1")
		// this.state.web3.eth.getAccounts()
		this.state.web3.eth.getAccounts((error, accounts) => {
			// TODO: if error(none) Handling
			var result = []
			var resultx = []
			var i = 0
			console.log("getAccountInfo2")
			console.log(accounts)
			accounts.forEach((e) => {
				let name = `${i}`
				let address = e
				let balance = this.state.web3.fromWei(this.state.web3.eth.getBalance(e),
					"ether")
				result.push(<tr key={i}><td>{name}</td><td>{address}</td>
					<td>{balance.c[0]}.{balance.c[1]}</td></tr>)
				resultx.push({balance})
				i++
			})
			console.log(resultx)
			this.setState({ accounts_info: result})
		})
	}


	render() {
		return (


<div className="SimpleCona">
	<Header title={this.state.title} />
	<div className="spacer45"></div>


	<div className="container-fluid">
		<div className="row">
			<div className="col-sm-12">
				<h2>My Wallets</h2>
				<hr/>
				<ConaWallet membership="CONATION MEMBERS"
				walletname="아나넘버원의 코내이션 지갑" balance="58,000"
				walletowner="SEWON HONG" />


				<div className="spacer45"></div>
				<h2>My Account</h2>
				<hr/>
				<input className="btn btn-outline-secondary" type="button"
					value="Create My ETH Account" />


				<div className="spacer45"></div>
				<h2>Accounts Information</h2>
				<hr/>
				<table className="table table-bordered" id="my-table">
					<colgroup>
						<col width="10" />
						<col width="45" />
						<col width="45" />
					</colgroup>
					<thead className="thead-dark">
						<tr>
						<th scope="col">#</th>
						<th scope="col">Address</th>
						<th scope="col">Balance</th>
						</tr>
					</thead>
					<tbody>
						{this.state.accounts_info}
					</tbody>
				</table>

				<div className="spacer45"></div>
				<h2>Transactions Information</h2>
				<hr/>
				<p>TransactionsInfo Table</p>
			</div>
		</div>
	</div>


	<div className="spacer45"></div>
	<Footer />
</div>


		)
	}
}
