"use strict";
exports.__esModule = true;
exports.VelasTestnet = exports.Velas = void 0;
exports.Velas = {
    chainId: 106,
    chainName: 'Velas Mainnet',
    isTestChain: false,
    isLocalChain: false,
    multicallAddress: '0x55c77eEba2b891c7f940cE4C3d9Fcd6915c12082',
    multicall2Address: '0x324f25e6eEB13D45DF559B7326d631e34Fd5ceDF',
    getExplorerAddressLink: function (address) { return "https://evmexplorer.velas.com/address/".concat(address); },
    getExplorerTransactionLink: function (transactionHash) { return "https://evmexplorer.velas.com/tx/".concat(transactionHash); }
};
exports.VelasTestnet = {
    chainId: 111,
    chainName: 'Velas Testnet',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0x649DEa474f0Ca0FDb276098d1A4c8BA62b4abC83',
    multicall2Address: '0x65f4f071505912dbC9dCCF3a51542374a43D6a5A',
    getExplorerAddressLink: function (address) { return "https://evmexplorer.testnet.velas.com/address/".concat(address); },
    getExplorerTransactionLink: function (transactionHash) {
        return "https://evmexplorer.testnet.velas.com/tx/".concat(transactionHash);
    }
};
exports["default"] = {
    Velas: exports.Velas,
    VelasTestnet: exports.VelasTestnet
};
//# sourceMappingURL=velas.js.map