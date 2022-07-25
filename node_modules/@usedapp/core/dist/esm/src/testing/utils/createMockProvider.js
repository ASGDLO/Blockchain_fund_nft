import { MockProvider } from 'ethereum-waffle';
import { ChainId } from '../../constants';
import { deployMulticall } from './deployMulticall';
/**
 * Creates a MockProvider, with an option to override `chainId`.
 * Automatically deploys multicall.
 */
export const createMockProvider = async (opts = {}) => {
    var _a;
    const chainId = (_a = opts.chainId) !== null && _a !== void 0 ? _a : ChainId.Mainnet;
    const provider = new MockProvider({ ganacheOptions: { _chainIdRpc: chainId } });
    const multicallAddresses = await deployMulticall(provider, chainId);
    return {
        provider,
        multicallAddresses,
        wallets: provider.getWallets(),
    };
};
//# sourceMappingURL=createMockProvider.js.map