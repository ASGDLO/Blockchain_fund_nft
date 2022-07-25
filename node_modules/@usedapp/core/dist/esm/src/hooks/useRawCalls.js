import { useContext, useEffect, useMemo } from 'react';
import { MultiChainStatesContext } from '../providers';
import { utils } from 'ethers';
/**
 * A low-level function that makes multiple calls to specific methods of specific contracts and returns values or error if present.
 * The hook will cause the component to refresh when values change.
 *
 * Calls will be combined into a single multicall across all uses of {@link useChainCall}, {@link useChainCalls}, {@link useRawCall} and {@link useRawCalls}.
 * It is recommended to use {@link useCalls} where applicable instead of this method.
 * @public
 * @param calls List of calls, also see {@link RawCall}. Calls need to be in the same order across component renders.
 * @returns list of multicall calls. See {@link RawCallResult} and {@link useRawCall}.
 */
export function useRawCalls(calls) {
    const { dispatchCalls, chains } = useContext(MultiChainStatesContext);
    useEffect(() => {
        const filteredCalls = calls.filter(Boolean);
        dispatchCalls({ type: 'ADD_CALLS', calls: filteredCalls });
        return () => dispatchCalls({ type: 'REMOVE_CALLS', calls: filteredCalls });
    }, [JSON.stringify(calls), dispatchCalls]);
    return useMemo(() => calls.map((call) => {
        return call ? extractCallResult(chains, call) : undefined;
    }), [JSON.stringify(calls), chains]);
}
/**
 * A low-level function that makes a call to a specific method of a specific contract and returns the value or error if present.
 * The hook will cause the component to refresh whenever a new block is mined and the value is changed.
 *
 * Calls will be combined into a single multicall across all uses of {@link useChainCall}, {@link useChainCalls}, {@link useRawCall} and {@link useRawCalls}.
 * It is recommended to use {@link useCall} where applicable instead of this method.
 *
 * @param call a single call, also see {@link RawCall}.
 *             A call can be Falsy, as it is important to keep the same ordering of hooks even if in a given render cycle
 *             and there might be not enough information to perform a call.
 * @public
 * @returns result of multicall call.
 *   The hook returns {@link RawCallResult} type.
 *   That is: `undefined` when call didn't return yet or object `{ success: boolean, value: string }` if it did,
 *   `success` - boolean indicating whether call was successful or not,
 *   `value` - encoded result when success is `true` or encoded error message when success is `false`.
 */
export function useRawCall(call) {
    return useRawCalls([call])[0];
}
function extractCallResult(chains, call) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    const chainId = call.chainId;
    if (chainId !== undefined) {
        const rawCallResult = (_d = (_c = (_b = (_a = chains[chainId]) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.state) === null || _c === void 0 ? void 0 : _c[call.address.toLowerCase()]) === null || _d === void 0 ? void 0 : _d[call.data];
        if (rawCallResult) {
            return rawCallResult;
        }
        const error = (_f = (_e = chains[chainId]) === null || _e === void 0 ? void 0 : _e.value) === null || _f === void 0 ? void 0 : _f.error;
        if (error) {
            const defaultErrorMessage = 'An error occurred';
            const errorMessage = (_q = (_p = (_m = (_l = (_j = (_h = (_g = error.error) === null || _g === void 0 ? void 0 : _g.data) === null || _h === void 0 ? void 0 : _h.message) !== null && _j !== void 0 ? _j : (_k = error.error) === null || _k === void 0 ? void 0 : _k.message) !== null && _l !== void 0 ? _l : error.reason) !== null && _m !== void 0 ? _m : (_o = error.data) === null || _o === void 0 ? void 0 : _o.message) !== null && _p !== void 0 ? _p : error.message) !== null && _q !== void 0 ? _q : defaultErrorMessage;
            const value = new utils.Interface(['function Error(string)']).encodeFunctionData('Error', [errorMessage]);
            return {
                success: false,
                value,
            };
        }
    }
}
//# sourceMappingURL=useRawCalls.js.map