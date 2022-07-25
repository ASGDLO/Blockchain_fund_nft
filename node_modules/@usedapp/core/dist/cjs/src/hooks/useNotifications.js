"use strict";
exports.__esModule = true;
exports.useNotifications = void 0;
var react_1 = require("react");
var providers_1 = require("../providers");
var useEthers_1 = require("./useEthers");
var useInterval_1 = require("./useInterval");
var hooks_1 = require("../hooks");
function getExpiredNotifications(notifications, expirationPeriod) {
    if (expirationPeriod === 0) {
        return [];
    }
    var timeFromCreation = function (creationTime) { return Date.now() - creationTime; };
    return notifications.filter(function (notification) { return timeFromCreation(notification.submittedAt) >= expirationPeriod; });
}
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
function useNotifications() {
    var _a = (0, useEthers_1.useEthers)(), chainId = _a.chainId, account = _a.account;
    var _b = (0, providers_1.useNotificationsContext)(), addNotification = _b.addNotification, notifications = _b.notifications, removeNotification = _b.removeNotification;
    var _c = (0, hooks_1.useConfig)().notifications, checkInterval = _c.checkInterval, expirationPeriod = _c.expirationPeriod;
    var chainNotifications = (0, react_1.useMemo)(function () {
        var _a;
        if (chainId === undefined || !account) {
            return [];
        }
        return (_a = notifications[chainId]) !== null && _a !== void 0 ? _a : [];
    }, [notifications, chainId, account]);
    (0, useInterval_1.useInterval)(function () {
        if (!chainId) {
            return;
        }
        var expiredNotification = getExpiredNotifications(chainNotifications, expirationPeriod);
        for (var _i = 0, expiredNotification_1 = expiredNotification; _i < expiredNotification_1.length; _i++) {
            var notification = expiredNotification_1[_i];
            removeNotification({ notificationId: notification.id, chainId: chainId });
        }
    }, checkInterval);
    return {
        notifications: chainNotifications,
        addNotification: addNotification,
        removeNotification: removeNotification
    };
}
exports.useNotifications = useNotifications;
//# sourceMappingURL=useNotifications.js.map