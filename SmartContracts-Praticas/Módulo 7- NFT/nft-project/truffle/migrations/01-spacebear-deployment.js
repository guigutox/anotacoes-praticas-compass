const SpaceBear = artifacts.require("Spacebear");

module.exports = function (deployer, network, accounts) {
    const initialOwner = accounts[0];  // Usar o primeiro endereço disponível como proprietário inicial
    deployer.deploy(SpaceBear, initialOwner);
};
