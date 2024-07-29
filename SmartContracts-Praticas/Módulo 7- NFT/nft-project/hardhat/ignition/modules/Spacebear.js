module.exports = async ({ ethers, getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
 
  await deploy("Spacebear", {
    from: deployer,
    log: true,
  });
};