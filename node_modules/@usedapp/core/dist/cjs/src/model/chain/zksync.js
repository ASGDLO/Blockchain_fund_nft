"use strict";
exports.__esModule = true;
exports.ZkSyncTestnet = void 0;
exports.ZkSyncTestnet = {
    chainId: 280,
    chainName: 'zkSync alpha testnet',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0x5014a961801de9a52548068bDac853CE337221e7',
    multicall2Address: '0x32Caf123F6f574035f51532E597125062C0Aa8EE',
    getExplorerAddressLink: function (address) { return "https://zksync2-testnet.zkscan.io/address/".concat(address); },
    getExplorerTransactionLink: function (transactionHash) { return "https://zksync2-testnet.zkscan.io/tx/".concat(transactionHash); }
};
//# sourceMappingURL=zksync.js.map