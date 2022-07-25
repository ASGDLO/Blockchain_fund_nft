import { useMemo } from 'react';
import { getChainMeta } from '../helpers/getChainMeta';
/**
 * @public
 */
export function useChainMeta(chainId) {
    return useMemo(() => getChainMeta(chainId), [chainId]);
}
//# sourceMappingURL=useChainMeta.js.map