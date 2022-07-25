import { Notification } from '../providers';
/**
 * ``useNotifications`` is a hook that is used to access notifications.
 * Notifications include information about: new transactions, transaction success or failure, as well as connection to a new wallet.
 *
 * To use this hook call:
 *
 * ```tsx
 *   const { notifications } = useNotifications()
 * ```
 *
 * `notifications` is an array of `NotificationPayload`.
 *
 * Each notification is removed from `notifications` after time declared in
 * `config.notifications.expirationPeriod`
 *
 * Each can be one of the following:
 *
 * ```tsx
 *   {
 *     type: 'walletConnected';
 *     address: string
 *   }
 * ```
 *
 * ```tsx
 *   {
 *     type: 'transactionStarted';
 *     submittedAt: number
 *     transaction: TransactionResponse;
 *     transactionName?: string
 *   }
 * ```
 *
 * ```tsx
 *   {
 *     type: 'transactionSucceed'
 *     transaction: TransactionResponse
 *     originalTransaction?: TransactionResponse
 *     receipt: TransactionReceipt
 *     transactionName?: string
 *   }
 * ```
 *
 * ```tsx
 *   {
 *     type: 'transactionFailed'
 *     transaction: TransactionResponse
 *     originalTransaction?: TransactionResponse
 *     receipt: TransactionReceipt
 *     transactionName?: string
 *   }
 * ```
 *
 * @public
 * @see [Transaction Response](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse)
 * @see [Transaction Receipt](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionReceipt)
 */
export declare function useNotifications(): {
    notifications: Notification[];
    addNotification: (payload: import("../providers").AddNotificationPayload) => void;
    removeNotification: (payload: import("../providers").RemoveNotificationPayload) => void;
};
//# sourceMappingURL=useNotifications.d.ts.map