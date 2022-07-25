import { useChainState } from './useChainState';
/**
 * Returns an address of the multicall contract used on a given chain.
 * @public
 * @param queryParams see {@link QueryParams}.
 */
export function useMulticallAddress(queryParams = {}) {
    var _a;
    return (_a = useChainState(queryParams)) === null || _a === void 0 ? void 0 : _a.multicallAddress;
}
//# sourceMappingURL=useMulticallAddress.js.map