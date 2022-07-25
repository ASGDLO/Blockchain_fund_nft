export const Fantom = {
    chainId: 250,
    chainName: 'Fantom',
    isTestChain: false,
    isLocalChain: false,
    multicallAddress: '0xdc85396592f0F466224390771C861EE3957a3ff4',
    getExplorerAddressLink: (address) => `https://ftmscan.com/address/${address}`,
    getExplorerTransactionLink: (transactionHash) => `https://ftmscan.com/tx/${transactionHash}`,
};
export const FantomTestnet = {
    chainId: 4002,
    chainName: 'FantomTestnet',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0xA01917aF773b703717C25C483a619e9218343531',
    getExplorerAddressLink: (address) => `https://testnet.ftmscan.com/address/${address}`,
    getExplorerTransactionLink: (transactionHash) => `https://testnet.ftmscan.com/tx/${transactionHash}`,
};
export default { Fantom, FantomTestnet };
//# sourceMappingURL=fantom.js.map