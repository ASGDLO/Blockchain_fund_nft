"use strict";
exports.__esModule = true;
exports.Optimism = exports.OptimismKovan = void 0;
var chainExplorerLink_1 = require("../../helpers/chainExplorerLink");
var testnetExplorerUrl = 'https://kovan-optimistic.etherscan.io';
exports.OptimismKovan = {
    chainId: 69,
    chainName: 'OptimismKovan',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0xE71bf4622578c7d1526A88CD3060f03030E99a04',
    rpcUrl: 'https://kovan.optimism.io',
    blockExplorerUrl: testnetExplorerUrl,
    getExplorerAddressLink: (0, chainExplorerLink_1.getAddressLink)(testnetExplorerUrl),
    getExplorerTransactionLink: (0, chainExplorerLink_1.getTransactionLink)(testnetExplorerUrl)
};
var optimismExplorerUrl = 'https://optimistic.etherscan.io';
exports.Optimism = {
    chainId: 10,
    chainName: 'Optimism',
    isTestChain: false,
    isLocalChain: false,
    multicallAddress: '0x35A6Cdb2C9AD4a45112df4a04147EB07dFA01aB7',
    rpcUrl: 'https://mainnet.optimism.io',
    blockExplorerUrl: optimismExplorerUrl,
    getExplorerAddressLink: (0, chainExplorerLink_1.getAddressLink)(optimismExplorerUrl),
    getExplorerTransactionLink: (0, chainExplorerLink_1.getTransactionLink)(optimismExplorerUrl)
};
exports["default"] = {
    OptimismKovan: exports.OptimismKovan,
    Optimism: exports.Optimism
};
//# sourceMappingURL=optimism.js.map