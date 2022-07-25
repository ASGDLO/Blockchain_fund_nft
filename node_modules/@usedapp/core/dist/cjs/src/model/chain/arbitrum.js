"use strict";
exports.__esModule = true;
exports.Arbitrum = exports.ArbitrumRinkeby = void 0;
var chainExplorerLink_1 = require("../../helpers/chainExplorerLink");
var arbiscanTestnetUrl = 'https://testnet.arbiscan.io';
exports.ArbitrumRinkeby = {
    chainId: 421611,
    chainName: 'ArbitrumRinkeby',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0xd27BEFd29F8Da4E187fDAEf663aEDF7742f9F47F',
    rpcUrl: 'https://rinkeby.arbitrum.io/rpc',
    blockExplorerUrl: arbiscanTestnetUrl,
    getExplorerAddressLink: (0, chainExplorerLink_1.getAddressLink)(arbiscanTestnetUrl),
    getExplorerTransactionLink: (0, chainExplorerLink_1.getTransactionLink)(arbiscanTestnetUrl)
};
var arbiscanUrl = 'https://arbiscan.io';
exports.Arbitrum = {
    chainId: 42161,
    chainName: 'Arbitrum',
    isTestChain: false,
    isLocalChain: false,
    multicallAddress: '0x8a0bd1773139C6609e861B9ab68082587a3cD581',
    multicall2Address: '0x80c7dd17b01855a6d2347444a0fcc36136a314de',
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
    blockExplorerUrl: arbiscanUrl,
    getExplorerAddressLink: (0, chainExplorerLink_1.getAddressLink)(arbiscanUrl),
    getExplorerTransactionLink: (0, chainExplorerLink_1.getTransactionLink)(arbiscanUrl)
};
exports["default"] = {
    ArbitrumRinkeby: exports.ArbitrumRinkeby,
    Arbitrum: exports.Arbitrum
};
//# sourceMappingURL=arbitrum.js.map