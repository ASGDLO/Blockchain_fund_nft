"use strict";
exports.__esModule = true;
exports.getAddNetworkParams = void 0;
// https://docs.metamask.io/guide/rpc-api.html#wallet-addethereumchain
// https://docs.metamask.io/guide/rpc-api.html#unrestricted-methods
var getAddNetworkParams = function (chain) { return ({
    chainId: "0x".concat(chain.chainId.toString(16)),
    chainName: chain.chainName,
    rpcUrls: [chain.rpcUrl],
    blockExplorerUrls: chain.blockExplorerUrl ? [chain.blockExplorerUrl] : undefined,
    nativeCurrency: chain.nativeCurrency
}); };
exports.getAddNetworkParams = getAddNetworkParams;
//# sourceMappingURL=getAddNetworkParams.js.map