import { BigNumber } from 'ethers';
import { QueryParams } from '../constants/type/QueryParams';
/**
 * Queries block metadata.
 * @public
 */
export declare function useBlockMeta(queryParams?: QueryParams): {
    timestamp: Date | undefined;
    difficulty: BigNumber | undefined;
};
//# sourceMappingURL=useBlockMeta.d.ts.map