const platformMapping = {
  "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270": "Art Blocks",
  "0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b": "OpenSea",
  // Add more known platforms and contract addresses here
};

async function getUserNFTs() {
  const options = { chain: 'eth', address: 'userAddress' };
  const userNFTs = await Moralis.Web3API.account.getNFTs(options);
  userNFTs.result.forEach(nft => {
    const platform = platformMapping[nft.token_address];
    if (platform) {
      console.log(`NFT from platform: ${platform}`);
    } else {
      console.log(`NFT from unknown platform: ${nft.token_address}`);
    }
  });
}

getUserNFTs();

/*
Moralis返回的NFT数据中有一个contract_type字段，它会指出这个NFT是来自于哪种类型的合约，比如ERC721或者ERC1155。同时，还会有一个contract_address字段，这个地址就是这个NFT的合约地址。

对于一些知名的NFT平台或项目，他们的合约地址是公开并且可以在网上查找的。你可以提前建立一个包含这些已知合约地址和对应平台名称的映射。然后在获取到用户NFT后，通过比对其contract_address来确定这个NFT的来源平台。
*/