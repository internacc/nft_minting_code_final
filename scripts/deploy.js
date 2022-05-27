const { ethers } = require("hardhat");

async function main(){
    //contract factory for MyContract
    const MyContract = await ethers.getContractFactory("MyContract");
    
    //now we have to deploy the contract, where we pass the contract name and the symbol for the same in the argument
    const myContractDeployed = await MyContract.deploy("MyContractName","MCN");

    //we wait fot the contract to be deployed
    await myContractDeployed.deployed()

    //this will help us to give the contract_address that we will be deploying
    console.log("deployed to: ", myContractDeployed.address);
}


//to check for any errors
main().then(()=>process.exit(0))
        .catch((error)=>{
            console.log(error);
            process.exit(1);    
        })