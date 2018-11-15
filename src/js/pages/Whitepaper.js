import React, { Component } from 'react'


import Footer from '../components/Footer'
import Header from '../components/Header'
import '../../css/pages/Whitepaper.css'



export default class Whitepaper extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: "CONATION.IO",
		}
	}

	render() {
		return (


<div className="Whitepaper">
	<Header title={this.state.title} />
		<div className="container-fluid">
			<div className="row">
				<nav id="navbar-whitepaper" className="col-md-3 col-lg-2 d-none d-md-block bg-secondary sidebar">
					<div className="sidebar-sticky">
						<div className="navbar text-muted">
							<span className="navbar-brand">Whitepaper</span>
						</div>
						<nav className="nav nav-pills flex-column">
							<a className="nav-link text-white" href="#abstract">Abstract</a>
							<a className="nav-link text-white" href="#introduction">Introduction</a>
							<nav className="nav nav-pills flex-column">
								<a className="nav-link ml-3 my-1 text-white" href="#introduction-1">Introduciton-1</a>
								<a className="nav-link ml-3 my-1 text-white" href="#introduction-2">Introduction-2</a>
							</nav>
							<a className="nav-link text-white" href="#conation-overview">Conation Overview</a>
							<a className="nav-link text-white" href="#technical-design">Technical Design</a>
							<nav className="nav nav-pills flex-column">
								<a className="nav-link ml-3 my-1 text-white" href="#technical-design-1">Technical Design-1</a>
								<a className="nav-link ml-3 my-1 text-white" href="#technical-design-2">Technical Design-2</a>
							</nav>
							<a className="nav-link text-white" href="#technical-design">Simulation</a>
							<a className="nav-link text-white" href="#technical-design">Phases</a>
							<a className="nav-link text-white" href="#implementation">Implementation</a>
							<a className="nav-link text-white" href="#references">Refernces</a>
						</nav>
					</div>
				</nav>

				<main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 break-word">
					<div data-spy="scroll" data-target="#navbar-whitepaper" data-offset="0">
						<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
							<h1 className="h2">Whitepaper</h1>
							<div>
								<span className="text-muted">Written by Shark on Febuary 20, 2018</span>
							</div>
						</div>




<h2 id="abstract"><strong>ABSTRACT</strong></h2>
<p>
Collectively, personal streaming market has grown rapidly [SOURCE: market size].
# of Streamers and Viewers online
Streamers earn by donation and Ad on Youtube or Twitch. This is barbaric.
We hypothesize that the donation platform. Donation Platform.
</p>




<hr/>
<h2 id="introduction"><strong>INTRODUCTION</strong></h2>
<p className="text-muted"><em>This section provides introductory of streaming market.</em></p>
<h3>Give any background for the reader - Brief history</h3>
<p>
Afreeca.tv - the first generation, advent of individual streaming
Recent Trend = Moving to Youtube/Twitch.
Source of Earn = External ads, star balloon
Problem = Too much commission fee
</p>

<h3>Recent trend</h3>
<p>
Source of Earn = Ads. / Donation / External Donation / External Ad offer.
Problem = Commission fee, microdonation, dependent on Donation. (Not enough value)
</p>

<h3 id="introduction-1">Why people "donate"</h3>
<p>
Where does the value come from = entertainment
Similar to how entertainers make money.
Vicarious satisfaction and respect, yearning (fans), Interest, Attention
</p>

<h3>So what's the problem?</h3>
<p>
Define problems here with reliable source or outstanding intuition.
Commission fee.
Meaningful and measurable contributions creates value
but is not stored or transfered freely.
</p>
<p>Shedding away from donation</p>



<hr/>
<h2><strong>CONATION OVERVIEW</strong></h2>
<p className="text-muted"><em>The Conation community provides the following services to its members</em></p>

<h3>Solution (Short)</h3>
<p>
The value created from meaningful and measurable contributions can be securely stored, transferred, transformed and exchanged
The reason why we use blockchain ethereum token. (Store, transfer, transform)
The reason why we use smart contract. (Reliable, Micro-contributions)
</p>

<h3>Why use conation?</h3>
<p>
Block-chain Driven Benefits
Stored Value Appreciation (Early bird catches the worm)
Low Fee Direct Donation (Use of LN almost no fee)
Subscription (Smart Contract)

Web Driven Benefits
Video-Donation
Micro-Donation
Other coin Donation

Activate MicroDonatoin (only big hand has been most of the donation)
</p>

<h3>Terminology Lexicon</h3>
<p>
My iterm
Ethereum token standard (ERC223)
</p>



<hr/>
<h2><strong>TECHNICAL DESIGN</strong></h2>
<p className="text-muted"><em>This section outlines the ideas behind Conation and its rewards for people who provide meaningful and measurable contributions to the Conation Community.</em></p>


<h3>High-Level Design Principles</h3>
<ol>
	<li>People who make meaningful and measurable contributions are rewarded. (degree of reward)</li>
	<li>Conation Co. should not make loss due to Ether Gas fee.</li>
	<li>The market price of CONA should rise as the Conation community gets large and active. (# Active Users # Transactions)</li>
	<li>There should be a lower bound for CONA price backed up by Conation Co.'s real estate or fiat money. (e.g. 1 CONA = 1 KRW)</li>
	<li>There is no upper bound for CONA price, the free market determines the price in exchange.</li>
	<li>Conation Co. cannot freely transfer CONA from the CONA Initial Reserve to prevent market price manipulation.</li>
</ol>

<h3>ERC223 Protocol</h3>
<p>Supported</p>

<h3>Backup</h3>
<p>1 CONA = 1 KRW</p>

<h3>Separation of Utility value Decision Power</h3>
<p>Utility Token: CONA, Stake Token: CONAShares</p>

<h3>Monthly Coin Release (MCR)</h3>
<p>
Not fixed supply token. Ever month, a decision is made through CONASTAKETOKEN Process.
Total Monthly Coin supply = Automatic re-supply (Returned token for fee) + New custom supply (Interface factor = Circulation rate)
Supply tokens so that tokens 1 CONA smaller than or equal to 1000 KRW until 10% Market Share confirmed (backed up by data) in PHASE 1
</p>

<h3>Automatic Fee Compensation (AFC)</h3>
<p>Sell received Token fee into Eth</p>

<h3>The "Early Bird" Incentive (EBI)</h3>
<p>Why hold CONA? --> free market will rise</p>
<p>The reason to hold CONA will be constantly challenged by the urge to spend CONA</p>

<h3>The 100,000 (EBI)</h3>
<p>
Basically, there is no upper bound for CONA value in the free market.
Howerver, monthly deicision will be made so that 1CONA = 100,000 KRW will mean
that Conation has 100% Market share of the streaming donation platform.
</p>




<hr/>
<h2><strong>SIMULATION</strong></h2>
<p>
Donator
1. Signup
2. Create Wallet Address
3. Buy 1CONA=1KRW in conation.io
3-1. Or Transfer CONA from other wallets from external exchange
4. Transfer 1CONA --> Streamer

Streamer
1. Signup
2. Create Wallet Address
3. Create/Customize Donation HTML+CSS realtime display
4. Receive CONA
5. Transfer CONA to external exchange and sell
5-2. Or Just sell 1CONA to 1 KRW

6. Reward (CONA) to top viewers

CONATION.IO
1. If streamer's wallet CONA receive detected --> display effect or smth

impressed! Button (x CONA)

Sell their clips Or smth for CONA (T-shirt or smth?) Pic/Poster / Only sell

Fan+
짤 모음 다운 (+ 중스코인 컨트랙트 사용?)
Ryu Je hong
Collecition Video
Sell Past Video

Editor's Market / Make highlight / clip videos and streamer purchases it back
Not purchased within 30days will be deleted
</p>




<hr/>
<h2><strong>PHASES (Subject to change)</strong></h2>
PHASE #1
Monthly Coin Release (MCR) - Decision Making Soley by conation.io
Stake 100% owned by conation.io


PHASE #2
Stake 20% Sold to free market
MCR decision made by Stake Ratio

PHASE #3
Stake 40% sold to free market
MCR descision made by Stake Ratio

PHASE #4
Stake 60% sold to free market
MCR descision made by Stake Ratio

PHASE #5
Stake 80% sold to free market
MCR descision made by Stake Ratio

PHASE #6
MCR Determined by Automatic Inflation Calculator
MCR Determined by




<hr/>
<h2><strong>IMPLEMENTATION</strong></h2>
Migrations.sol
ContractValidation.sol - state (1-5), Schedule, untilDate (can be null), force, Version
TokenTransaction.sol - Send, Charge / Check valid Name/Address / Check Frozen
TokenWallet.sol - Unique Name, Freeze/Unfreeze wallet
Wallet made within CONATIOn (USE LN for speed / data saving instead)
Support instant free market buy and donate (fixed KRW)




<hr/>
<h2><strong>REFERENCES</strong></h2>
<ul>
<li>
https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn/
</li>
<li>
https://medium.com/@mvmurthy/ethereum-for-web-developers-890be23d1d0c
</li>
<li>
Fee in Token: https://github.com/bokkypoobah/BokkyPooBahsTokenTeleportationServiceSmartContract#how-it-works
</li>
<li>
https://github.com/ethereum/go-ethereum/issues/14647
</li>
<li>
https://aragon.one/core
</li>
<li>
https://github.com/ethereum/wiki/wiki/White-Paper
</li>
<li>
https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-2-30b3d335aa1f
</li>
<li>
https://infura.io/
</li>
<li>
https://ethereum.stackexchange.com/questions/25920/view-contract-details-in-a-django-application/25925#25925
</li>
<li>
https://github.com/ethereum/pyethereum
</li>
<li>
https://github.com/ethereum/web3.py
</li>
<li>
https://etherscan.io/apis
</li>
<li>
https://tokenfactory.surge.sh/#/factory
</li>
<li>
http://ipfs-search.com/
</li>
<li>
https://macwright.org/2017/08/09/decentralize-ipfs.html
</li>
<li>
https://ropsten.etherscan.io/address/0x8438913e8ca5af045377140a978b59f309d9a224
</li>
<li>
Test RPC: It uses ethereumjs to simulate full client behavior and make developing Ethereum applications much faster.
Testrpc only simulate the chain but is not one.
https://github.com/trufflesuite/ganache-cli
</li>
<li>
Geth: Ethereum Client for JSON-RPC (API) Server [golang]
https://github.com/ethereum/go-ethereum/wiki/geth
</li>
<li>
Truffle: Ethereum Dapp Development Framework [javascript]
http://truffleframework.com/
</li>
<li>
Meteor: Web framework [javascript]
https://www.meteor.com/
</li>
<li>
Node.js (8.9.4 LTS)
</li>
<li>
https://mlgblockchain.com/meteor-wallet.html
meteor add ethereum:web3
meteor add ethereum:accounts
https://atmospherejs.com/ethereum/accounts
meteor add iron:router
meteor add twbs:
npm install ganache-cli (test)
</li>
<li>
7 Principles of Rich Web Applications
https://www.youtube.com/watch?v=p2F-128e3sI
Server rendered pages are not optional
Act immediately on user input
React to data changes
Control the data exchange with the server
Don't break history, enhance it
Push code updates
Predict behavior
</li>
<li>Important:https://gitlab.com/robmyers/artworld-ethereum</li>
<li>https://www.youtube.com/watch?v=1iAG6h9ff5s&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b&index=6</li>
<li>Tgether Community based on Steem</li>
<li>https://blog.w3k.it/using-an-ethereum-node-to-build-a-web3-js-app-which-interacts-with-erc20-token-contracts-923f65e2d2eb</li>
<li>MongoDB 3.6</li>
<li>Docker</li>
<li>npm install --save express morgan</li>
<li>JWT O-Auth2.0</li>
<li>QR Code Mobile Pay</li>
<li>One page overlay ! </li>
</ul>





				</div>
			</main>
		</div>
	</div>
	<Footer />
</div>


		)
	}
}

