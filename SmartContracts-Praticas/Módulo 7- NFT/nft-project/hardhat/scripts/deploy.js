(async () => {
  try {
    const Spacebear = await hre.ethers.getContractFactory("Spacebear");
    const spacebearInstance = await Spacebear.deploy();

    await spacebearInstance.waitForDeployment()

    console.log(
      `Deployed contract at ${spacebearInstance.address}`
    );

    console.log(
      `Deployed contract at ${spacebearInstance.transactionHash}`
    )
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
})();