"use strict";
exports.__esModule = true;
exports.useTransactions = void 0;
var react_1 = require("react");
var providers_1 = require("../providers");
var useEthers_1 = require("./useEthers");
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
function useTransactions(queryParams) {
    if (queryParams === void 0) { queryParams = {}; }
    var _a = (0, useEthers_1.useEthers)(), defaultChainId = _a.chainId, account = _a.account;
    var _b = (0, providers_1.useTransactionsContext)(), addTransaction = _b.addTransaction, transactions = _b.transactions;
    var _chainId = queryParams.chainId;
    var chainId = (0, react_1.useMemo)(function () { return _chainId !== null && _chainId !== void 0 ? _chainId : defaultChainId; }, [_chainId, defaultChainId]);
    var filtered = (0, react_1.useMemo)(function () {
        var _a;
        if (chainId === undefined || !account) {
            return [];
        }
        return ((_a = transactions[chainId]) !== null && _a !== void 0 ? _a : []).filter(function (x) { return x.transaction.from === account; });
    }, [transactions, chainId, account]);
    return {
        transactions: filtered,
        addTransaction: addTransaction
    };
}
exports.useTransactions = useTransactions;
//# sourceMappingURL=useTransactions.js.map