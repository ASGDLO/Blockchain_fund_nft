import { ChainId } from '../constants';
/**
 * @internal Intended for internal use - use it on your own risk
 */
export declare const getChainById: (chainId: ChainId) => import("../constants").Chain | undefined;
/**
 * @public
 * @deprecated
 */
export declare const getExplorerAddressLink: (address: string, chainId: ChainId) => string | '';
/**
 * @public
 * @deprecated
 */
export declare const getExplorerTransactionLink: (transactionHash: string, chainId: ChainId) => string | '';
/**
 * @public
 * @deprecated
 */
export declare const getChainName: (chainId: ChainId) => string;
/**
 * @public
 * @deprecated
 */
export declare const isTestChain: (chainId: ChainId) => boolean;
/**
 * @public
 * @deprecated
 */
export declare const isLocalChain: (chainId: ChainId) => boolean;
//# sourceMappingURL=chain.d.ts.map