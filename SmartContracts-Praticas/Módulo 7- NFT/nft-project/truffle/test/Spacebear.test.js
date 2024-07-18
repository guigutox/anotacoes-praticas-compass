const Spacebear = artifacts.require("Spacebear");
const truffleAssert = require('truffle-assertions');

contract("Spacebear", (accounts) => {
    
    it("Deve creditar um NTO para uma conta em especifico", async () => {
        const spacebearInstance = await Spacebear.deployed();
      let txResult = await spacebearInstance.safeMint(accounts[1], "spacebear_1.json");
         //  assert.equal(txResult.logs[0].event, "Transfer", "Evento de transferencia invalido");
       //assert.equal(txResult.logs[0].args.from, "0x0000000000000000000000000000000000000000", "Transferecia de conta inválida");
        truffleAssert.eventEmitted(txResult, "Transfer", {from: "0x0000000000000000000000000000000000000000", to: accounts[1], tokenId: web3.utils.toBN("0")});
        assert.equal( await spacebearInstance.ownerOf(0), accounts[1], "A NFT não foi creditada para a conta correta");
        
    })

})