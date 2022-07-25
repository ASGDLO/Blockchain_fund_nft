import type { providers } from 'ethers';
export interface UseReadonlyProviderOptions {
    chainId?: number;
}
export interface ReadonlyNetwork {
    provider: providers.BaseProvider;
    chainId: number;
}
/**
 * Gets a readonly provider for specific chainId.
 * @param opts.chainId Requested chainId. If not provided, the currently connected wallet's chainId will be used or the default one from the config.
 * @returns An ethers.js provider or undefined.
 * @public
 */
export declare function useReadonlyNetwork(opts?: UseReadonlyProviderOptions): ReadonlyNetwork | undefined;
//# sourceMappingURL=useReadonlyProvider.d.ts.map