import type { BlockTag, Filter, FilterByBlockHash, Log } from '@ethersproject/abstract-provider';
import { TypedFilter } from '../hooks/useLogs';
import { Awaited, ContractEventNames, DetailedEventRecord, Falsy, TypedContract } from '../model/types';
/**
 * @internal Intended for internal use - use it on your own risk
 */
export declare function warnOnInvalidFilter(filter: TypedFilter | Falsy): void;
/**
 * @internal Intended for internal use - use it on your own risk
 */
export declare function encodeFilterData(filter: TypedFilter | Falsy, fromBlock?: BlockTag, toBlock?: BlockTag, blockHash?: string): Filter | FilterByBlockHash | Falsy | Error;
/**
 * @public
 */
export declare type LogsResult<T extends TypedContract, EN extends ContractEventNames<T>> = {
    value: Awaited<DetailedEventRecord<T, EN>>[];
    error: undefined;
} | {
    value: undefined;
    error: Error;
} | undefined;
/**
 * @internal Intended for internal use - use it on your own risk
 */
export declare function decodeLogs<T extends TypedContract, EN extends ContractEventNames<T>>(filter: TypedFilter | Falsy, result: Log[] | Falsy | Error): LogsResult<T, EN>;
//# sourceMappingURL=logs.d.ts.map