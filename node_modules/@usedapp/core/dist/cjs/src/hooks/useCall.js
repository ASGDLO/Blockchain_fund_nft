"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.useCalls = exports.useCall = void 0;
var react_1 = require("react");
var useRawCalls_1 = require("./useRawCalls");
var helpers_1 = require("../helpers");
var useChainId_1 = require("./useChainId");
var useConfig_1 = require("./useConfig");
/**
 * Makes a call to a specific method of a specific contract and returns the value or an error if present.
 * The hook will cause the component to refresh when a new block is mined and the return value changes.
 * A syntax sugar for {@link useRawCall} that uses ABI, function name, and arguments instead of raw data.
 * If typechain contract is used in `call` parameter then method name and arguments will be type checked.
 * Result will be typed as well.
 *
 * More on type checking [here](https://usedapp-docs.netlify.app/docs/Guides/Reading/Typechain).
 *
 * @public
 * @param call a single call to a contract, also see {@link Call}
 * @returns The hook returns {@link CallResult} type.
 *
 * @example
 * function useTotalSupply(tokenAddress: string | undefined): BigNumber | undefined {
 *    const { value, error } = useCall(tokenAddress && {
 *      contract: new Contract(tokenAddress, ERC20Interface),
 *      method: 'totalSupply',
 *      args: []
 *    }) ?? {}
 *    if(error) {
 *      console.error(error.message)
 *      return undefined
 *    }
 *    return value?.[0]
 * }
 */
function useCall(call, queryParams) {
    if (queryParams === void 0) { queryParams = {}; }
    return useCalls([call], queryParams)[0];
}
exports.useCall = useCall;
/**
 * Makes calls to specific methods of specific contracts and returns values or an error if present.
 * The hook will cause the component to refresh when a new block is mined and the return values change.
 * A syntax sugar for {@link useRawCalls} that uses ABI, function name, and arguments instead of raw data.
 * @public
 * @param calls a list of contract calls, also see {@link Call}.
 * @param queryParams see {@link QueryParams}.
 * @returns a list of results (see {@link CallResult}).
 *
 * @example
 * function useTotalSupplies(tokenAddresses: string[] | undefined): (BigNumber | undefined)[] {
 *   const calls = tokenAddresses?.map(address => ({
 *     contract: new Contract(address, ERC20Interface),
 *     method: 'totalSupply',
 *     args: []
 *   })) ?? []
 *   const results = useCalls(calls) ?? []
 *   results.forEach((result, idx) => {
 *     if(result && result.error) {
 *       console.error(`Error encountered calling 'totalSupply' on ${calls[idx]?.contract.address}: ${result.error.message}`)
 *     }
 *   })
 *   return results.map(result => result?.value?.[0])
 * }
 */
function useCalls(calls, queryParams) {
    if (queryParams === void 0) { queryParams = {}; }
    var chainId = (0, useChainId_1.useChainId)({ queryParams: queryParams });
    var refresh = (0, useConfig_1.useConfig)().refresh;
    var rawCalls = (0, react_1.useMemo)(function () {
        return calls.map(function (call) {
            var _a;
            return chainId !== undefined
                ? (0, helpers_1.encodeCallData)(call, chainId, __assign(__assign({}, queryParams), { refresh: (_a = queryParams.refresh) !== null && _a !== void 0 ? _a : refresh }))
                : undefined;
        });
    }, [
        JSON.stringify(calls.map(function (call) { return call && { address: call.contract.address.toLowerCase(), method: call.method, args: call.args }; })),
        chainId,
    ]);
    var results = (0, useRawCalls_1.useRawCalls)(rawCalls);
    return (0, react_1.useMemo)(function () { return results.map(function (result, idx) { return (0, helpers_1.decodeCallResult)(calls[idx], result); }); }, [results]);
}
exports.useCalls = useCalls;
//# sourceMappingURL=useCall.js.map