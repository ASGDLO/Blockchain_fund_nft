import { TransactionOptions } from '../model/TransactionOptions';
import { Contract, Signer } from 'ethers';
import { LogDescription } from 'ethers/lib/utils';
import { ContractFunctionNames, Falsy, Params, TypedContract } from '../model/types';
import { TransactionReceipt } from '@ethersproject/abstract-provider';
/**
 * @internal Intended for internal use - use it on your own risk
 */
export declare function connectContractToSigner(contract: Contract, options?: TransactionOptions, librarySigner?: Signer): Contract;
/**
 * Hook returns an object with four variables: ``state`` , ``send``, ``events`` , and ``resetState``.
 *
 * The `state` represents the status of transaction. See {@link TransactionStatus}.
 *
 * `resetState` can be used to reset the state to `None` after a transaction attempt has either succeeded or failed.
 *
 * The `events` is a array of parsed transaction events of type [LogDescription](https://docs.ethers.io/v5/api/utils/abi/interface/#LogDescription).
 *
 * To send a transaction use `send` function returned by `useContractFunction`.
 * The function forwards arguments to ethers.js contract object, so that arguments map 1 to 1 with Solidity function arguments.
 * Additionally, there can be one extra argument - [TransactionOverrides](https://docs.ethers.io/v5/api/contract/contract/#contract-functionsSend), which can be used to manipulate transaction parameters like gasPrice, nonce, etc
 *
 * If typechain contract is supplied as contract parameter then function name and send arguments will be type checked.
 * More on type checking [here](https://usedapp-docs.netlify.app/docs/Guides/Reading/Typechain).
 * @public
 * @param contract contract which function is to be called , also see [Contract](https://docs.ethers.io/v5/api/contract/contract/)
 * @param functionName name of function to call
 * @param options additional options of type {@link TransactionOptions}
 * @returns {} object with variables: `send` , `state` , `events`: `{ send: (...args: any[]) => void, state: TransactionStatus, events: LogDescription[] }`.
 *
 * @example
 * const { state, send } = useContractFunction(contract, 'deposit', { transactionName: 'Wrap' })
 *
 * const depositEther = (etherAmount: string) => {
 *   send({ value: utils.parseEther(etherAmount) })
 * }
 * @example
 * const { state, send } = useContractFunction(contract, 'withdraw', { transactionName: 'Unwrap' })
 *
 * const withdrawEther = (wethAmount: string) => {
 *   send(utils.parseEther(wethAmount))
 * }
 */
export declare function useContractFunction<T extends TypedContract, FN extends ContractFunctionNames<T>>(contract: T | Falsy, functionName: FN, options?: TransactionOptions): {
    send: (...args: Params<T, FN>) => Promise<TransactionReceipt | undefined>;
    state: import("..").TransactionStatus;
    events: LogDescription[] | undefined;
    resetState: () => void;
};
//# sourceMappingURL=useContractFunction.d.ts.map