
// See <http://truffleframework.com/docs/advanced/configuration>
// to customize your Truffle configuration!
// var HDWalletProvider = require("truffle-hdwallet-provider");
// var mnemonic = "ini mini mani mo shark bird";

// require('babel-register')
module.exports = {
  networks: {
    rinkeby: {
      host: 'localhost',
      port: 8545,
      network_id: '*'
      // gas: 470000,4712388,
      // gasPrice: 100000000000,
      // from: "0xef75b7237106197a0de69d47c855757b03891b2e" //From address used during migrations.
      // Defaults to the first available account provided by your Ethereum client.
      // provider: , Default web3 provider using host and port options:
      // new Web3.providers.HttpProvider("http://<host>:<port>")
    }
  }
}