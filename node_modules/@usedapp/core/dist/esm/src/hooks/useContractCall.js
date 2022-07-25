import { useMemo } from 'react';
import { useChainCalls } from './useChainCalls';
import { useChainId } from './useChainId';
function warnOnInvalidContractCall(call) {
    console.warn(`Invalid contract call: address=${call && call.address} method=${call && call.method} args=${call && call.args}`);
}
function encodeCallData(call, chainId) {
    if (!call) {
        return undefined;
    }
    if (!call.address || !call.method) {
        warnOnInvalidContractCall(call);
        return undefined;
    }
    try {
        return { address: call.address, data: call.abi.encodeFunctionData(call.method, call.args), chainId };
    }
    catch (_a) {
        warnOnInvalidContractCall(call);
        return undefined;
    }
}
/**
 * Makes a call to a specific contract and returns the value. The hook will cause the component to refresh when a new block is mined and the return value changes.
 * A syntax sugar for {@link useChainCall} that uses ABI, function name, and arguments instead of raw data.
 * @public
 * @param call a single call to a contract, also see {@link ContractCall}.
 * @deprecated It is recommended to use {@link useCall} instead of this method as it is deprecated.
 * @returns the result of a call or undefined if call didn't return yet.
 */
export function useContractCall(call, queryParams = {}) {
    return useContractCalls([call], queryParams)[0];
}
/**
 * Makes calls to specific contracts and returns values. The hook will cause the component to refresh when a new block is mined and the return values change.
 * A syntax sugar for {@link useChainCalls} that uses ABI, function name, and arguments instead of raw data.
 * @public
 * @param calls a list of contract calls , also see {@link ContractCall}.
 * @deprecated It is recommended to use {@link useCalls} instead of this method as it is deprecated.
 * @returns array of results. Undefined if call didn't return yet.
 */
export function useContractCalls(calls, queryParams = {}) {
    const chainId = useChainId({ queryParams });
    const rawCalls = useMemo(() => calls.map((call) => (chainId !== undefined ? encodeCallData(call, chainId) : undefined)), [
        JSON.stringify(calls.map((call) => { var _a; return call && { address: (_a = call.address) === null || _a === void 0 ? void 0 : _a.toLowerCase(), method: call.method, args: call.args }; })),
        chainId,
    ]);
    const results = useChainCalls(rawCalls);
    return useMemo(() => results.map((result, idx) => {
        const call = calls[idx];
        if (result === '0x') {
            warnOnInvalidContractCall(call);
            return undefined;
        }
        return call && result ? call.abi.decodeFunctionResult(call.method, result) : undefined;
    }), [JSON.stringify(results)]);
}
//# sourceMappingURL=useContractCall.js.map