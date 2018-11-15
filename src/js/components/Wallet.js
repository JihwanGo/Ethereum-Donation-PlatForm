import React from "react"


import getWeb3 from '../../utils/getWeb3'
import '../../css/components/Wallet.css'


export default class Wallet extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			balance: -1,
			exrate: 1.1141592,
			web3: null,
		}
	}

	componentDidMount() {
		// TODO: Check if the provided wallet address is truly mine
		getWeb3.then(results => {
			this.setState({ web3: results.web3 })

			// console.log("Before", this.state.balance)
			this.getBalance()
			// console.log("After", this.state.balance)
		})
		.catch((err) => {
			console.log('Error finding web3.', err)
		})
	}

	getBalance() {
		if (this.props.address && this.props.address !== "") {
			// console.log("getBalance")
			this.state.web3.eth.getBalance(this.props.address, (error, result) => {
				if (error) {
					console.log("Error getting balance: ", error)
				} else {
					let balance = this.state.web3.fromWei(result, 'ether')
					this.setState({balance: Number(balance)})
				}
			})

		}
	}

	onWalletOutSubmit =(event) => {
		// TODO: Front Check
		// Valid FROM/TO Address
		// Valid Amount
		const fromAddress = event.target.inputFromAddress.value
		const toAddress = event.target.inputToAddress.value
		const amount = event.target.inputAmount.value
		// eslint-disable-next-line
		const message = event.target.inputMessage.value

		var passphrase = ""
		if (fromAddress === '0xcb098ad7f17866e1b1dd7e171acc018fb3c5ae84')
			passphrase = 'bird-nt'
		else if (fromAddress === '0xefd2ae502f3cf64b009634e23301acb620c53f62')
			passphrase = 'bird-nt2'
		this.state.web3.personal.unlockAccount(fromAddress, passphrase, 120)
		// eslint-disable-next-line
		var gas_price = this.state.web3.eth.gasPrice

		var txObject = {
			from: fromAddress,
			to: toAddress,
			value: this.state.web3.toWei(Number(amount), 'ether'),
		}
		// eslint-disable-next-line
		var gas_amount = this.state.web3.eth.estimateGas(txObject);

		this.state.web3.eth.sendTransaction(
			txObject,
			function(err, transactionHash) {
				if (!err) console.log(transactionHash);
				else console.log(err);
			}
		);
		event.target.inputToAddress.value = ""
		event.target.inputAmount.value = ""
		event.target.inputMessage.value = ""
		return false;
	}

	copyToClipboard = (e) => {
		this.textArea.select();
		document.execCommand('copy');
		// This is just personal preference.
		// I prefer to not show the the whole text area selected.
		e.target.focus();
		// this.setState({ copySuccess: 'Copied!' });
	};

	render() {
		return (


<div>
	{/* Wallet */}
	<div className="card text-white bg-secondary mb-3 rounded" style={{minHeight: '220px'}}>
		<div className="card-header">{this.props.name}</div>
		<div className="card-body text-right">
			<h3 className="card-title">{this.state.balance} {this.props.unit}</h3>
			<p className="card-text">≈ ₩{Math.round(this.state.exrate * this.state.balance)}</p>
		</div>
		<div className="btn-group" role="group">
			<button type="button" className="btn btn-secondary w-50" data-toggle="modal" data-target="#walletInModal">IN</button>
			<button type="button" className="btn btn-secondary w-50" data-toggle="modal" data-target="#walletOutModal">OUT</button>
		</div>
	</div>

	{/* IN MODAL */}
	<div className="modal fade" tabIndex="-1" role="dialog" id="walletInModal">
		<div className="modal-dialog" role="document">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title">{this.props.name} IN</h5>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				
				<div className="modal-body">
					{/* Warning Statement */}
					<div className="alert alert-danger" role="alert">
						Be sure to deposit {this.props.unit} to the exact address shown below.
						{' '}When transferring any large amounts, test with a small amount first.
						{' '}We cannot recover the loss made due to mistake.
					</div>

					{/* QR Code */}
					<div className="text-center">
						<img className="img-thumbnail" alt="QR Code" style={{width: '100%'}} 
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Bangla_Wikipedia_%28mobile%29_QR_code.svg/768px-Bangla_Wikipedia_%28mobile%29_QR_code.svg.png"/>
					</div>
					<br/>
					{/* Text Address */}
					<div className="input-group mb-3">
						<input type="text" className="form-control"
							value={this.props.address}
							ref={(textarea) => this.textArea = textarea} readOnly/>
						{
							/* Logical shortcut for only displaying the 
							button if the copy command exists */
							document.queryCommandSupported('copy') &&
							<div className="input-group-append">
								<button className="btn btn-outline-secondary" type="button" onClick={this.copyToClipboard}>Copy</button>
							</div>
						}
					</div>
				</div>
			</div>
		</div>
	</div>

	{/* OUT MODAL */}
	<div className="modal fade" tabIndex="-1" role="dialog" id="walletOutModal">
		<div className="modal-dialog" role="document">
			<div className="modal-content">
				<form onSubmit={ this.onWalletOutSubmit } target="dummyframeWalletOut">
				<div className="modal-header">
					<h5 className="modal-title">{this.props.name} OUT</h5>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">
					{/* Warning Statement */}
					<div className="alert alert-danger" role="alert">
						{/*<a href="#" className="alert-link">an example link</a>.*/}
						Be sure to transfer {this.props.unit} to the exact address.
						{' '}When transferring any large amounts, test with a small amount first.
						{' '}We cannot recover the loss made due to mistake.
					</div>

					{/* OUT INFO */}
					<div className="form-group">
						<fieldset>
							<label className="control-label mb-0"><small><strong>FROM</strong></small></label>
							<input className="form-control" name="inputFromAddress"
							type="text" placeholder="If you are seeing this, something's wrong. Do not make any transactions."
							value={this.props.address} readOnly />
						</fieldset>
					</div>

					<div className="form-group has-success">
						<label className="form-control-label mb-0"><small><strong>TO</strong></small></label>
						<input type="text" className="form-control" name="inputToAddress"
						placeholder={"Enter destination " + this.props.unit + " address"} />
						<div className="valid-feedback">Success! You've done it.</div>
					</div>

					<div className="form-group">
						<label className="control-label mb-0"><small><strong>AMOUNT TO SEND</strong></small></label>
						<div className="form-group">
							<div className="input-group mb-3">
								<input type="text" className="form-control" name="inputAmount"
								placeholder={"Enter amount of " + this.props.unit + " to send"} />
								<div className="input-group-append">
									<span className="input-group-text">{this.props.unit}</span>
								</div>
							</div>
						</div>
					</div>


					<div className="form-group">
						<label className="form-control-label mb-0"><small><strong>MESSAGE</strong></small></label>
						<input type="text" className="form-control" name="inputMessage"
						placeholder={"Enter your message"} />
					</div>


				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
					<button type="submit" className="btn btn-primary">Widthdraw</button>
				</div>
				</form>
				<iframe width="0" height="0" name="dummyframeWalletOut" className="d-none"></iframe>
			</div>
		</div>
	</div>
</div>

		)
	}
}