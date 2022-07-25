import type { TransactionRequest } from '@ethersproject/abstract-provider';
import { TransactionOptions } from '../model/TransactionOptions';
import { providers } from 'ethers';
/**
 * Hook returns an object with three variables: `state`, `resetState`, and `sendTransaction`.
 *
 * ``state` represents the status of transaction. See {@link TransactionStatus}.
 *
 * `resetState` can be used to reset the state to `None` after a transaction attempt has either succeeded or failed.
 *
 * To send a transaction use `sendTransaction` function returned by `useSendTransaction`.
 *
 * Function accepts a [Transaction Request](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionRequest) object as a parameter.
 * @public
 * @param options additional options of type {@link TransactionOptions}
 * @returns {} object with two variables: `sendTransaction` and `state`: `{ sendTransaction: (...args: any[]) => void, state: TransactionStatus }`.
 *
 * @example
 * const { sendTransaction, state } = useSendTransaction({ transactionName: 'Send Ethereum' })
 *
 * const handleClick = () => {
 *   ...
 *   sendTransaction({ to: address, value: utils.parseEther(amount) })
 * }
 */
export declare function useSendTransaction(options?: TransactionOptions): {
    sendTransaction: (transactionRequest: TransactionRequest) => Promise<providers.TransactionReceipt | undefined>;
    state: import("..").TransactionStatus;
    resetState: () => void;
};
//# sourceMappingURL=useSendTransaction.d.ts.map