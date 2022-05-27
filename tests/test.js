//hence now we can use the assertion library
const {expect} = require('chai');

const { ethers } = require("hardhat");

//will create a new group of test cases.
//We can have multiple describe function for the describing the each of the different contracts
//typicaly we are describing one contract, and then we can have multiple describe functions for each of the contracts
//MyContract is the name of the solidity file
describe("MyContract",function(){
    //we have one test case per functionality.
    //we can also have one test case per line or per possible action that can be taken
    it("should return correct name", async function(){

        const [owner] = await ethers.getSigners();
        
        //this getContractFactory function allows us to get the actual class of our contracts
        //that is available in MyContract.sol   
        const MyContract = await ethers.getContractFactory("../contracts/MyContract.sol");

        //instantiate the deployed contract
        //some random values have been passed as of now for the testing purpose
        const myContractDeployed = await MyContract.deploy("MyContractName","MCN");

        //waiting for completely deploying
        await myContractDeployed.deploy();

        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        
        //to expect some results and comparing our expectation with the same
        
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
        expect(await myContractDeployed.name()).to.equal("MyContractNamewrong");
        expect(await myContractDeployed.symbol()).to.equal("MyContractNamewrong");
    });
});