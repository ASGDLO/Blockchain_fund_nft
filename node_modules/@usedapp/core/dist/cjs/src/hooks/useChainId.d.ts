import { QueryParams } from '../constants/type/QueryParams';
export interface UseChainIdOptions {
    queryParams?: QueryParams;
}
/**
 * Internal hook for reading current chainId for calls.
 * @internal Intended for internal use - use it on your own risk
 */
export declare function useChainId(opts?: UseChainIdOptions): number | undefined;
//# sourceMappingURL=useChainId.d.ts.map