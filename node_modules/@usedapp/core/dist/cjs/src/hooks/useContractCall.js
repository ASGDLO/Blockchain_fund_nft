"use strict";
exports.__esModule = true;
exports.useContractCalls = exports.useContractCall = void 0;
var react_1 = require("react");
var useChainCalls_1 = require("./useChainCalls");
var useChainId_1 = require("./useChainId");
function warnOnInvalidContractCall(call) {
    console.warn("Invalid contract call: address=".concat(call && call.address, " method=").concat(call && call.method, " args=").concat(call && call.args));
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
        return { address: call.address, data: call.abi.encodeFunctionData(call.method, call.args), chainId: chainId };
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
function useContractCall(call, queryParams) {
    if (queryParams === void 0) { queryParams = {}; }
    return useContractCalls([call], queryParams)[0];
}
exports.useContractCall = useContractCall;
/**
 * Makes calls to specific contracts and returns values. The hook will cause the component to refresh when a new block is mined and the return values change.
 * A syntax sugar for {@link useChainCalls} that uses ABI, function name, and arguments instead of raw data.
 * @public
 * @param calls a list of contract calls , also see {@link ContractCall}.
 * @deprecated It is recommended to use {@link useCalls} instead of this method as it is deprecated.
 * @returns array of results. Undefined if call didn't return yet.
 */
function useContractCalls(calls, queryParams) {
    if (queryParams === void 0) { queryParams = {}; }
    var chainId = (0, useChainId_1.useChainId)({ queryParams: queryParams });
    var rawCalls = (0, react_1.useMemo)(function () { return calls.map(function (call) { return (chainId !== undefined ? encodeCallData(call, chainId) : undefined); }); }, [
        JSON.stringify(calls.map(function (call) { var _a; return call && { address: (_a = call.address) === null || _a === void 0 ? void 0 : _a.toLowerCase(), method: call.method, args: call.args }; })),
        chainId,
    ]);
    var results = (0, useChainCalls_1.useChainCalls)(rawCalls);
    return (0, react_1.useMemo)(function () {
        return results.map(function (result, idx) {
            var call = calls[idx];
            if (result === '0x') {
                warnOnInvalidContractCall(call);
                return undefined;
            }
            return call && result ? call.abi.decodeFunctionResult(call.method, result) : undefined;
        });
    }, [JSON.stringify(results)]);
}
exports.useContractCalls = useContractCalls;
//# sourceMappingURL=useContractCall.js.map