import { useContext } from 'react';
import { MultiChainStatesContext } from '../providers';
import { useChainId } from './useChainId';
/**
 * @public
 */
export function useChainState(queryParams = {}) {
    const multiChainState = useContext(MultiChainStatesContext);
    const chainId = useChainId({ queryParams });
    if (chainId === undefined) {
        return undefined;
    }
    return Object.assign(Object.assign({}, multiChainState.chains[chainId]), { dispatchCalls: multiChainState.dispatchCalls });
}
//# sourceMappingURL=useChainState.js.map