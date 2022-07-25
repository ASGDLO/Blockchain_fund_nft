import { useReadonlyNetworks } from '../providers/network';
import { useChainId } from './useChainId';
/**
 * Gets a readonly provider for specific chainId.
 * @param opts.chainId Requested chainId. If not provided, the currently connected wallet's chainId will be used or the default one from the config.
 * @returns An ethers.js provider or undefined.
 * @public
 */
export function useReadonlyNetwork(opts = {}) {
    const chainId = useChainId({ queryParams: { chainId: opts.chainId } });
    const providers = useReadonlyNetworks();
    return providers[chainId] !== undefined && chainId !== undefined
        ? {
            provider: providers[chainId],
            chainId: chainId,
        }
        : undefined;
}
//# sourceMappingURL=useReadonlyProvider.js.map