"use strict";
exports.__esModule = true;
exports.BobaRinkeby = exports.Boba = void 0;
exports.Boba = {
    chainId: 288,
    chainName: 'Boba',
    isTestChain: false,
    isLocalChain: false,
    multicallAddress: '0x344696b815742A3E31181207e027e5110e2A0f74',
    rpcUrl: 'https://mainnet.boba.network',
    getExplorerAddressLink: function (address) { return "https://blockexplorer.boba.network/address/".concat(address); },
    getExplorerTransactionLink: function (transactionHash) { return "https://blockexplorer.boba.network/tx/".concat(transactionHash); }
};
exports.BobaRinkeby = {
    chainId: 28,
    chainName: 'BobaRinkeby',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0xC8Ad85fF276fbC1aDF627D9dff0AfD8bdc4C3492',
    rpcUrl: 'https://rinkeby.boba.network',
    getExplorerAddressLink: function (address) { return "https://blockexplorer.rinkeby.boba.network/".concat(address); },
    getExplorerTransactionLink: function (transactionHash) {
        return "https://blockexplorer.rinkeby.boba.network/tx/".concat(transactionHash);
    }
};
exports["default"] = {
    Boba: exports.Boba,
    BobaRinkeby: exports.BobaRinkeby
};
//# sourceMappingURL=boba.js.map