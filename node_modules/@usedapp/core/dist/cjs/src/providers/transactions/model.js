"use strict";
exports.__esModule = true;
exports.DEFAULT_STORED_TRANSACTIONS = exports.getStoredTransactionState = void 0;
/**
 * @public
 */
function getStoredTransactionState(transaction) {
    if (transaction.receipt) {
        return transaction.receipt.status === 0 ? 'Fail' : 'Success';
    }
    return 'Mining';
}
exports.getStoredTransactionState = getStoredTransactionState;
/**
 * @internal Intended for internal use - use it on your own risk
 */
exports.DEFAULT_STORED_TRANSACTIONS = {};
//# sourceMappingURL=model.js.map