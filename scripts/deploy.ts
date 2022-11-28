// import { ethers } from "hardhat";
import { artifacts, ethers, network } from "hardhat";
import * as fs from "fs";
import { Contract } from "hardhat/internal/hardhat-network/stack-traces/model";
import { HowlingHustlersNFT } from "../typechain-types";

async function main() {
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contract with the account:",
    await deployer.getAddress()
  );
  
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const howlingHustlersCF = await ethers.getContractFactory("HowlingHustlersNFT");
  const howlingHustlersC = await howlingHustlersCF.deploy();
  await howlingHustlersC.deployed();

  console.log("HH Contract address:", howlingHustlersC.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(howlingHustlersC);
}

function saveFrontendFiles(contract: HowlingHustlersNFT) {
  const contractsDir = __dirname + "/../frontend-next/contracts";
  
  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({ HowlingHustlersC: contract.address }, undefined, 2)
  );

  const HowlingHustlersCArtifact =
    artifacts.readArtifactSync("HowlingHustlersNFT");
  
  fs.writeFileSync(
    contractsDir + "/HowlingHustlersNFT.json",
    JSON.stringify(HowlingHustlersCArtifact, null, 2)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
