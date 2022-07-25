import { utils } from 'ethers';
import { QueryParams } from '../constants/type/QueryParams';
import { Falsy } from '../model/types';
/**
 * @public
 * @deprecated Use {@link useCall} instead.
 */
export interface ContractCall {
    abi: utils.Interface;
    address: string;
    method: string;
    args: any[];
}
/**
 * Makes a call to a specific contract and returns the value. The hook will cause the component to refresh when a new block is mined and the return value changes.
 * A syntax sugar for {@link useChainCall} that uses ABI, function name, and arguments instead of raw data.
 * @public
 * @param call a single call to a contract, also see {@link ContractCall}.
 * @deprecated It is recommended to use {@link useCall} instead of this method as it is deprecated.
 * @returns the result of a call or undefined if call didn't return yet.
 */
export declare function useContractCall(call: ContractCall | Falsy, queryParams?: QueryParams): any[] | undefined;
/**
 * Makes calls to specific contracts and returns values. The hook will cause the component to refresh when a new block is mined and the return values change.
 * A syntax sugar for {@link useChainCalls} that uses ABI, function name, and arguments instead of raw data.
 * @public
 * @param calls a list of contract calls , also see {@link ContractCall}.
 * @deprecated It is recommended to use {@link useCalls} instead of this method as it is deprecated.
 * @returns array of results. Undefined if call didn't return yet.
 */
export declare function useContractCalls(calls: (ContractCall | Falsy)[], queryParams?: QueryParams): (any[] | undefined)[];
//# sourceMappingURL=useContractCall.d.ts.map