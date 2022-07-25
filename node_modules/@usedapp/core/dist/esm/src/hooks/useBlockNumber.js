import { useContext } from 'react';
import { BlockNumberContext } from '../providers';
/**
 * Get the current block number.
 * Will update automatically when the new block is mined.
 * @public
 */
export function useBlockNumber() {
    return useContext(BlockNumberContext);
}
//# sourceMappingURL=useBlockNumber.js.map