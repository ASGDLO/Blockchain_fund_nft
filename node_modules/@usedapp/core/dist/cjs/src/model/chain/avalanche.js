"use strict";
exports.__esModule = true;
exports.AvalancheTestnet = exports.Avalanche = void 0;
var chainExplorerLink_1 = require("../../helpers/chainExplorerLink");
var avax = {
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18
};
var avalancheExplorerUrl = 'https://snowtrace.io';
exports.Avalanche = {
    chainId: 43114,
    chainName: 'Avalanche',
    isTestChain: false,
    isLocalChain: false,
    multicallAddress: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
    rpcUrl: 'https://rpc.ankr.com/avalanche',
    blockExplorerUrl: avalancheExplorerUrl,
    nativeCurrency: avax,
    getExplorerAddressLink: (0, chainExplorerLink_1.getAddressLink)(avalancheExplorerUrl),
    getExplorerTransactionLink: (0, chainExplorerLink_1.getTransactionLink)(avalancheExplorerUrl)
};
var testExplorerUrl = 'https://testnet.snowtrace.io';
exports.AvalancheTestnet = {
    chainId: 43113,
    chainName: 'AvalancheTestnet',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0xccc75e78Dce6A20bCCa3a30deB23Cb4D23df993a',
    rpcUrl: 'https://api.avax-test.network/ext/bc/C/rpc',
    nativeCurrency: avax,
    blockExplorerUrl: testExplorerUrl,
    getExplorerAddressLink: (0, chainExplorerLink_1.getAddressLink)(testExplorerUrl),
    getExplorerTransactionLink: (0, chainExplorerLink_1.getTransactionLink)(testExplorerUrl)
};
exports["default"] = {
    Avalanche: exports.Avalanche,
    AvalancheTestnet: exports.AvalancheTestnet
};
//# sourceMappingURL=avalanche.js.map