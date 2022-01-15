const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Deployed 'Transactions' to:", transactions.address);
}

const init = async () => {
  try {
    await main();
    process.exit(0);
  }
  catch (err) {
    console.error(err);
    process.exit(1);
  }
}


init()