import type { providers } from 'ethers';
import { RawCall } from './callsReducer';
import { ChainState } from './model';
/**
 * @public
 */
export declare const multicall1Factory: (fastEncoding: boolean) => typeof fastEncodingMulticall;
/**
 * @public
 */
export declare function multicall(provider: providers.Provider, address: string, blockNumber: number, requests: RawCall[]): Promise<ChainState>;
/**
 * @public
 */
export declare function fastEncodingMulticall(provider: providers.Provider, address: string, blockNumber: number, requests: RawCall[]): Promise<ChainState>;
//# sourceMappingURL=multicall.d.ts.map