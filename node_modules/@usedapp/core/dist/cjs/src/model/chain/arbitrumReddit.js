"use strict";
exports.__esModule = true;
exports.ArbitrumRedditTestnet = void 0;
var chainExplorerLink_1 = require("../../helpers/chainExplorerLink");
var arbitrumRedditscanUrl = 'https://testnet.redditspace.com';
exports.ArbitrumRedditTestnet = {
    chainId: 5391184,
    chainName: 'ArbitrumRedditTestnet',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0x722db82dea58c880d03b87885053f206f1b37136',
    multicall2Address: '0xd4d664d419a6a845c98cc366ae1c4b24592bd5ce',
    rpcUrl: 'https://testnet.redditspace.com/rpc',
    blockExplorerUrl: arbitrumRedditscanUrl,
    getExplorerAddressLink: (0, chainExplorerLink_1.getAddressLink)(arbitrumRedditscanUrl),
    getExplorerTransactionLink: (0, chainExplorerLink_1.getTransactionLink)(arbitrumRedditscanUrl)
};
exports["default"] = {
    ArbitrumRedditTestnet: exports.ArbitrumRedditTestnet
};
//# sourceMappingURL=arbitrumReddit.js.map