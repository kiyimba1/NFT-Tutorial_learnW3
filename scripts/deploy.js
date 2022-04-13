//Import ethers from hardhat
const { ethers } = require("hardhat");

async function main() {
    /* 
    Contract factory in ether.js is an abstraction used to deploy new smart contracts, so nftContract here is a factory for instances of our GameItem contract.
    */
    
    const nftContract = await ethers.getContractFactory("GameItem");

    //here we deploy the contract
    const deployNFTContract = await nftContract.deploy();

    //print the address of the deployed contract
    console.log("NFT Cntract Address: ", deployNFTContract.address);
}

//Call main function and catch if there is any error
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });