import { QueryParams } from '../constants/type/QueryParams';
/**
 * `useTransactions` hook returns a list `transactions`. This list contains
 * all transactions that were sent using {@link useContractFunction} and {@link useSendTransaction}.
 * Transactions are stored in local storage and the status is rechecked on every new block.
 *
 * Each transaction has following type:
 *
 * ```
 * export interface StoredTransaction {
 *   transaction: TransactionResponse
 *   submittedAt: number
 *   receipt?: TransactionReceipt
 *   lastCheckedBlockNumber?: number
 *   transactionName?: string
 *   originalTransaction?: TransactionResponse
 * }
 * ```
 *
 * @see [Transaction Response](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse)
 * @see [Transaction Receipt](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionReceipt)
 * @public
 */
export declare function useTransactions(queryParams?: QueryParams): {
    transactions: import("../providers").StoredTransaction[];
    addTransaction: (payload: import("../providers").StoredTransaction) => void;
};
//# sourceMappingURL=useTransactions.d.ts.map