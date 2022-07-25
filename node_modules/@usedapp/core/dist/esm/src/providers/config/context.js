import { createContext } from 'react';
import { DEFAULT_CONFIG } from '../../model/config/default';
/**
 * @internal Intended for internal use - use it on your own risk
 */
export const ConfigContext = createContext({
    config: DEFAULT_CONFIG,
    updateConfig: () => undefined,
});
//# sourceMappingURL=context.js.map