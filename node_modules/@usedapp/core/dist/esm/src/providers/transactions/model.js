/**
 * @public
 */
export function getStoredTransactionState(transaction) {
    if (transaction.receipt) {
        return transaction.receipt.status === 0 ? 'Fail' : 'Success';
    }
    return 'Mining';
}
/**
 * @internal Intended for internal use - use it on your own risk
 */
export const DEFAULT_STORED_TRANSACTIONS = {};
//# sourceMappingURL=model.js.map