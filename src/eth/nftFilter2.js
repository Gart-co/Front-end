const Web3 = require('web3');

async function getWalletNFTs() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  } else {
    window.alert('Please install MetaMask');
    return;
  }

  const web3 = window.web3;
  const accounts = await web3.eth.getAccounts();

  // 这是你想查询的NFT合约地址
  const nftContractAddress = "0xYourNftContractAddress";

  // 对应的ERC721 ABI
  const ERC721_ABI = [/*...*/];

  // 使用web3创建一个代表该NFT合约的对象
  const nftContract = new web3.eth.Contract(ERC721_ABI, nftContractAddress);

  // 用ERC721合约的balanceOf函数获取用户拥有的NFT数量
  const balance = await nftContract.methods.balanceOf(accounts[0]).call();

  // 迭代用户拥有的每个NFT
  for (let i = 0; i < balance; i++) {
    // 使用tokenOfOwnerByIndex获取对应的Token ID
    const tokenId = await nftContract.methods.tokenOfOwnerByIndex(accounts[0], i).call();

    // 打印Token ID
    console.log(`Owned token ID: ${tokenId}`);
  }
}

getWalletNFTs().then(console.log);

/*
这段代码只检索和打印用户在某个ERC721 NFT合约中拥有的所有Token ID。
注意，这段代码只会检索用户在一个特定的NFT合约中拥有的Token ID。如果想查询用户在多个合约中的NFT，需要重复执行这段代码，每次更换查询的合约地址。此外，如果用户在不同的区块链网络（例如以太坊主网和Polygon）上拥有NFT，需要处理网络切换的问题。
*/