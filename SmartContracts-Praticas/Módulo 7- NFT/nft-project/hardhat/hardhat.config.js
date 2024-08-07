require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");

const fs = require("fs");
let mnemonic = fs.readFileSync(".secret").toString().trim();
let infuraProjectId = fs.readFileSync(".infura").toString().trim();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
networks: {
     sepolia: {
      url: "https://sepolia.infura.io/v3/"+ infuraProjectId,
      accounts:{
        mnemonic,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 10,
      },
  }
},

 etherscan: {
  apiKey: fs.readFileSync(".etherscan").toString().trim(),

},

  solidity: "0.8.24",
};
