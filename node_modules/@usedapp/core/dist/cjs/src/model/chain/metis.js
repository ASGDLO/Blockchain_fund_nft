"use strict";
exports.__esModule = true;
exports.Andromeda = exports.Stardust = void 0;
exports.Stardust = {
    chainId: 588,
    chainName: 'Stardust',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0xaF9D4DC0698d8FD9f41387ecb08D9976079B8086',
    getExplorerAddressLink: function (address) { return "https://stardust-explorer.metis.io/address/".concat(address); },
    getExplorerTransactionLink: function (transactionHash) { return "https://stardust-explorer.metis.io/tx/".concat(transactionHash); }
};
exports.Andromeda = {
    chainId: 1088,
    chainName: 'Andromeda',
    isTestChain: false,
    isLocalChain: false,
    multicallAddress: '0x1a2AFb22B8A90A77a93e80ceA61f89D04e05b796',
    getExplorerAddressLink: function (address) { return "https://andromeda-explorer.metis.io/address/".concat(address); },
    getExplorerTransactionLink: function (transactionHash) { return "https://andromeda-explorer.metis.io/tx/".concat(transactionHash); }
};
exports["default"] = { Stardust: exports.Stardust, Andromeda: exports.Andromeda };
//# sourceMappingURL=metis.js.map