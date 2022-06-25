const hre = require("hardhat");

const main = async () =>{

  // We get the contract to deploy
  const Balances = await hre.ethers.getContractFactory("Balances");
  const balances = await Balances.deploy();

  await balances.deployed();

  console.log("Greeter deployed to:", balances.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.

const runMain = async()=>{
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

runMain()