require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/GNsCE7WDRMyS9xwSYzNqPuRElHS-vXQL",
      accounts: ['b611e1d5eb4a29e3cb69776e1a8d836a0bc6d45665c8e5517f4d39c99fec42ce']
    }
  }
}