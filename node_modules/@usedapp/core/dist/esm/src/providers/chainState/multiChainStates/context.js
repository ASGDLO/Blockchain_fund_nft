import { createContext, useContext } from 'react';
/**
 * @internal Intended for internal use - use it on your own risk
 */
export const MultiChainStatesContext = createContext({
    chains: {},
    dispatchCalls: () => undefined,
});
/**
 * @internal Intended for internal use - use it on your own risk
 */
export function useMultiChainStates() {
    return useContext(MultiChainStatesContext);
}
//# sourceMappingURL=context.js.map