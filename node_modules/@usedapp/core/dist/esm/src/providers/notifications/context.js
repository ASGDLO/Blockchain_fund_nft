import { createContext, useContext } from 'react';
import { DEFAULT_NOTIFICATIONS } from './model';
export const NotificationsContext = createContext({
    notifications: DEFAULT_NOTIFICATIONS,
    addNotification: () => undefined,
    removeNotification: () => undefined,
});
/**
 * @internal Intended for internal use - use it on your own risk
 */
export function useNotificationsContext() {
    return useContext(NotificationsContext);
}
//# sourceMappingURL=context.js.map