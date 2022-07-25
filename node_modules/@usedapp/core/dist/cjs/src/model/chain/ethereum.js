"use strict";
exports.__esModule = true;
exports.Kovan = exports.Goerli = exports.Rinkeby = exports.Ropsten = exports.Mainnet = void 0;
var chainExplorerLink_1 = require("../../helpers/chainExplorerLink");
var etherscanUrl = 'https://etherscan.io';
var ropstenEtherscanUrl = 'https://ropsten.etherscan.io';
var rinkebyEtherscanUrl = 'https://rinkeby.etherscan.io';
var goerliEtherscanUrl = 'https://goerli.etherscan.io';
var kovanEtherscanUrl = 'https://kovan.etherscan.io';
exports.Mainnet = {
    chainId: 1,
    chainName: 'Mainnet',
    isTestChain: false,
    isLocalChain: false,
    multicallAddress: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    multicall2Address: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
    blockExplorerUrl: etherscanUrl,
    getExplorerAddressLink: (0, chainExplorerLink_1.getAddressLink)(etherscanUrl),
    getExplorerTransactionLink: (0, chainExplorerLink_1.getTransactionLink)(etherscanUrl)
};
exports.Ropsten = {
    chainId: 3,
    chainName: 'Ropsten',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0x53c43764255c17bd724f74c4ef150724ac50a3ed',
    multicall2Address: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
    blockExplorerUrl: ropstenEtherscanUrl,
    getExplorerAddressLink: (0, chainExplorerLink_1.getAddressLink)(ropstenEtherscanUrl),
    getExplorerTransactionLink: (0, chainExplorerLink_1.getTransactionLink)(ropstenEtherscanUrl)
};
exports.Rinkeby = {
    chainId: 4,
    chainName: 'Rinkeby',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821',
    multicall2Address: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
    blockExplorerUrl: rinkebyEtherscanUrl,
    getExplorerAddressLink: (0, chainExplorerLink_1.getAddressLink)(rinkebyEtherscanUrl),
    getExplorerTransactionLink: (0, chainExplorerLink_1.getTransactionLink)(rinkebyEtherscanUrl)
};
exports.Goerli = {
    chainId: 5,
    chainName: 'Goerli',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e',
    multicall2Address: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
    blockExplorerUrl: goerliEtherscanUrl,
    getExplorerAddressLink: (0, chainExplorerLink_1.getAddressLink)(goerliEtherscanUrl),
    getExplorerTransactionLink: (0, chainExplorerLink_1.getTransactionLink)(goerliEtherscanUrl)
};
exports.Kovan = {
    chainId: 42,
    chainName: 'Kovan',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a',
    multicall2Address: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
    blockExplorerUrl: kovanEtherscanUrl,
    getExplorerAddressLink: (0, chainExplorerLink_1.getAddressLink)(kovanEtherscanUrl),
    getExplorerTransactionLink: (0, chainExplorerLink_1.getTransactionLink)(kovanEtherscanUrl)
};
exports["default"] = {
    Mainnet: exports.Mainnet,
    Ropsten: exports.Ropsten,
    Rinkeby: exports.Rinkeby,
    Goerli: exports.Goerli,
    Kovan: exports.Kovan
};
//# sourceMappingURL=ethereum.js.map