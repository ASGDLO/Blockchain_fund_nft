import { providers } from 'ethers';
import { RawCall } from './callsReducer';
import { ChainState } from './model';
/**
 * @public
 */
export declare const multicall2Factory: (fastEncoding: boolean) => typeof fastEncodingMulticall2;
/**
 * @public
 */
export declare function multicall2(provider: providers.Provider, address: string, blockNumber: number, requests: RawCall[]): Promise<ChainState>;
/**
 * @public
 */
export declare function fastEncodingMulticall2(provider: providers.Provider, address: string, blockNumber: number, requests: RawCall[]): Promise<ChainState>;
//# sourceMappingURL=multicall2.d.ts.map