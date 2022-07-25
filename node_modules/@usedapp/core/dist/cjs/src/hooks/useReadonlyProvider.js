"use strict";
exports.__esModule = true;
exports.useReadonlyNetwork = void 0;
var network_1 = require("../providers/network");
var useChainId_1 = require("./useChainId");
/**
 * Gets a readonly provider for specific chainId.
 * @param opts.chainId Requested chainId. If not provided, the currently connected wallet's chainId will be used or the default one from the config.
 * @returns An ethers.js provider or undefined.
 * @public
 */
function useReadonlyNetwork(opts) {
    if (opts === void 0) { opts = {}; }
    var chainId = (0, useChainId_1.useChainId)({ queryParams: { chainId: opts.chainId } });
    var providers = (0, network_1.useReadonlyNetworks)();
    return providers[chainId] !== undefined && chainId !== undefined
        ? {
            provider: providers[chainId],
            chainId: chainId
        }
        : undefined;
}
exports.useReadonlyNetwork = useReadonlyNetwork;
//# sourceMappingURL=useReadonlyProvider.js.map