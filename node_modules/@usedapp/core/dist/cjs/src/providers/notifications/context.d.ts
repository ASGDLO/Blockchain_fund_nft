import { Notifications, AddNotificationPayload, RemoveNotificationPayload } from './model';
export declare const NotificationsContext: import("react").Context<{
    notifications: Notifications;
    addNotification: (payload: AddNotificationPayload) => void;
    removeNotification: (payload: RemoveNotificationPayload) => void;
}>;
/**
 * @internal Intended for internal use - use it on your own risk
 */
export declare function useNotificationsContext(): {
    notifications: Notifications;
    addNotification: (payload: AddNotificationPayload) => void;
    removeNotification: (payload: RemoveNotificationPayload) => void;
};
//# sourceMappingURL=context.d.ts.map