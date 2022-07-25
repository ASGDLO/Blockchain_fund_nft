import { useNetwork } from '../providers';
import { useConfig } from '../hooks';
/**
 * Internal hook for reading current chainId for calls.
 * @internal Intended for internal use - use it on your own risk
 */
export function useChainId(opts = {}) {
    var _a, _b, _c;
    const { network } = useNetwork();
    const { readOnlyChainId } = useConfig();
    return (_c = (_b = (_a = opts === null || opts === void 0 ? void 0 : opts.queryParams) === null || _a === void 0 ? void 0 : _a.chainId) !== null && _b !== void 0 ? _b : network.chainId) !== null && _c !== void 0 ? _c : readOnlyChainId;
}
//# sourceMappingURL=useChainId.js.map