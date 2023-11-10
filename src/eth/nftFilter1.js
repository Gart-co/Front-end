// import the web3 library
const Web3 = require('web3');

async function getNftData() {
    // Create a web3 instance
    const web3 = new Web3(window.ethereum);

    // Request account access
    await window.ethereum.enable();

    // Get list of accounts
    const accounts = await web3.eth.getAccounts();
    
    // The first account is the one connected to MetaMask
    const account = accounts[0];

    // This will hold the final data
    const nftData = {};

    // The contract ABI, you need to set this according to your NFT contract
    const abi = []; // ABI array here

    // Iterate over each NFT contract
    for (const contractAddress of nftContracts) {
        // Create a new contract instance
        const contract = new web3.eth.Contract(abi, contractAddress);

        // Get the total supply of NFTs
        const totalSupply = await contract.methods.totalSupply().call();

        // Iterate over each NFT
        for (let i = 0; i < totalSupply; i++) {
            // Get the owner of the NFT
            const owner = await contract.methods.ownerOf(i).call();

            // If the owner is the user's account
            if (owner.toLowerCase() === account.toLowerCase()) {
                // Get the gallery source. This is platform-specific and may require
                // additional API calls or contract interactions.
                const source = await getNftSource(contractAddress, i);

                // Add the NFT data to the map
                nftData[`${contractAddress}_${i}`] = source;
            }
        }
    }

    return nftData;
}

getNftData().then(console.log);

/*在这个示例中，nftContracts是一个包含想要查询的NFT合约地址的数组，getNftSource是一个函数，它返回给定NFT的来源信息。需要根据特定需求来实现这个函数。
可能需要修改和扩展它以适应你的具体需求。例如，可能需要处理多个网络（如Ethereum主网和Polygon），或者处理不同类型的NFT合约（如ERC721和ERC1155）。*/