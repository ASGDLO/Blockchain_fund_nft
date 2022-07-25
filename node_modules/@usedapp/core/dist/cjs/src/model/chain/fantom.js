"use strict";
exports.__esModule = true;
exports.FantomTestnet = exports.Fantom = void 0;
exports.Fantom = {
    chainId: 250,
    chainName: 'Fantom',
    isTestChain: false,
    isLocalChain: false,
    multicallAddress: '0xdc85396592f0F466224390771C861EE3957a3ff4',
    getExplorerAddressLink: function (address) { return "https://ftmscan.com/address/".concat(address); },
    getExplorerTransactionLink: function (transactionHash) { return "https://ftmscan.com/tx/".concat(transactionHash); }
};
exports.FantomTestnet = {
    chainId: 4002,
    chainName: 'FantomTestnet',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0xA01917aF773b703717C25C483a619e9218343531',
    getExplorerAddressLink: function (address) { return "https://testnet.ftmscan.com/address/".concat(address); },
    getExplorerTransactionLink: function (transactionHash) { return "https://testnet.ftmscan.com/tx/".concat(transactionHash); }
};
exports["default"] = { Fantom: exports.Fantom, FantomTestnet: exports.FantomTestnet };
//# sourceMappingURL=fantom.js.map