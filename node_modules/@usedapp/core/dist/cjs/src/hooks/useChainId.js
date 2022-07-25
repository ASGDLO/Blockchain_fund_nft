"use strict";
exports.__esModule = true;
exports.useChainId = void 0;
var providers_1 = require("../providers");
var hooks_1 = require("../hooks");
/**
 * Internal hook for reading current chainId for calls.
 * @internal Intended for internal use - use it on your own risk
 */
function useChainId(opts) {
    var _a, _b, _c;
    if (opts === void 0) { opts = {}; }
    var network = (0, providers_1.useNetwork)().network;
    var readOnlyChainId = (0, hooks_1.useConfig)().readOnlyChainId;
    return (_c = (_b = (_a = opts === null || opts === void 0 ? void 0 : opts.queryParams) === null || _a === void 0 ? void 0 : _a.chainId) !== null && _b !== void 0 ? _b : network.chainId) !== null && _c !== void 0 ? _c : readOnlyChainId;
}
exports.useChainId = useChainId;
//# sourceMappingURL=useChainId.js.map