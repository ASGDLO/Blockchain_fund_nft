import { QueryParams } from '../constants/type/QueryParams';
import type { Filter, FilterByBlockHash, Log } from '@ethersproject/abstract-provider';
import { Falsy } from '../model/types';
/**
 * Returns all blockchain logs given a block filter.
 * The hook will cause the component to refresh when a new block is mined and the returned logs change.
 * @see {@link useLogs} for a more easy-to-use version of the query.
 * @param filter an event filter, which blocks to query
 * @param queryParams allows for additional configuration of the query (see {@link QueryParams})
 * @returns an array of [logs](https://docs.ethers.io/v5/api/providers/types/#providers-Log)
 * @public
 */
export declare function useRawLogs(filter: Filter | FilterByBlockHash | Promise<Filter | FilterByBlockHash> | Falsy, queryParams?: QueryParams): Log[] | undefined;
//# sourceMappingURL=useRawLogs.d.ts.map