require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
//our contract abi is the interface enabling our js script to interact with our smart contract.
const contract = require("../artifacts/contracts/MyContract.sol/Mycontract.json");

const contractInterface = contract.abi;
let provider = ethers.provider;
const tokenURI = "QmUig5S5oybrRubZsGLundgGNwYVuDM7eRYW9oPUNcever";
const privateKey = `0x${process.env.PRIVATE_KEY}`;
const wallet = new ethers.Wallet(privateKey);
wallet.provider = provider;
const signer = wallet.connect(provider);
const nft = new ethers.Contract(
    process.env.CONTRACT_ADDRESS,
    contractInterface,
    signer
  );
  const main = () => {
    console.log("Waiting 5 blocks for confirmation...");
    nft
      .mintNFT(process.env.PUBLIC_KEY, tokenURI)
      .then((tx) => tx.wait(5))
      .then((receipt) => console.log(`Your transaction is confirmed, its receipt is: ${receipt.transactionHash}`))
  
      .catch((e) => console.log("something went wrong", e));
  };
  
main();