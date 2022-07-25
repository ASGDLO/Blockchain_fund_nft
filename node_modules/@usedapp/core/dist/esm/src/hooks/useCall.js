import { useMemo } from 'react';
import { useRawCalls } from './useRawCalls';
import { decodeCallResult, encodeCallData } from '../helpers';
import { useChainId } from './useChainId';
import { useConfig } from './useConfig';
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
export function useCall(call, queryParams = {}) {
    return useCalls([call], queryParams)[0];
}
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
export function useCalls(calls, queryParams = {}) {
    const chainId = useChainId({ queryParams });
    const { refresh } = useConfig();
    const rawCalls = useMemo(() => calls.map((call) => {
        var _a;
        return chainId !== undefined
            ? encodeCallData(call, chainId, Object.assign(Object.assign({}, queryParams), { refresh: (_a = queryParams.refresh) !== null && _a !== void 0 ? _a : refresh }))
            : undefined;
    }), [
        JSON.stringify(calls.map((call) => call && { address: call.contract.address.toLowerCase(), method: call.method, args: call.args })),
        chainId,
    ]);
    const results = useRawCalls(rawCalls);
    return useMemo(() => results.map((result, idx) => decodeCallResult(calls[idx], result)), [results]);
}
//# sourceMappingURL=useCall.js.map