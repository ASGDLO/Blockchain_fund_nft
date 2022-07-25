import { getAddress } from 'ethers/lib/utils';
import { getAddNetworkParams } from '../helpers/getAddNetworkParams';
import { validateArguments } from '../helpers/validateArgument';
import { useNetwork } from '../providers';
import { useConfig } from '../hooks';
import { useReadonlyNetwork } from './useReadonlyProvider';
/**
 * Returns connection state and functions that allow to manipulate the state.
 * **Requires**: `<ConfigProvider>`
 *
 * @public
 * @returns {} Object with the following:
    - `account: string` - current user account (or *undefined* if not connected)
    - `chainId: ChainId` - current chainId (or *undefined* if not connected)
    - `library: Web3Provider` - an instance of ethers [Web3Provider](https://github.com/EthWorks/useDapp/tree/master/packages/example) (or `undefined` if not connected)
    - `active: boolean` - returns if provider is connected (read or write mode)
    - `activateBrowserWallet()` - function that will initiate connection to browser web3 extension (e.g. Metamask)
    - `async activate(connector: AbstractConnector, onError?: (error: Error) => void, throwErrors?: boolean)` - function that allows to connect to a wallet
    - `async deactivate()` - function that disconnects wallet
    - `error?: Error` - an error that occurred during connecting (e.g. connection is broken, unsupported network)
 */
export function useEthers() {
    const { network: { provider: networkProvider, chainId, accounts, errors }, deactivate, activate, activateBrowserWallet, isLoading, } = useNetwork();
    const { networks } = useConfig();
    const supportedChainIds = networks === null || networks === void 0 ? void 0 : networks.map((network) => network.chainId);
    const isUnsupportedChainId = chainId && supportedChainIds && supportedChainIds.indexOf(chainId) < 0;
    const unsupportedChainIdError = new Error(`Unsupported chain id: ${chainId}. Supported chain ids are: ${supportedChainIds}.`);
    unsupportedChainIdError.name = 'UnsupportedChainIdError';
    const error = isUnsupportedChainId ? unsupportedChainIdError : errors[errors.length - 1];
    const readonlyNetwork = useReadonlyNetwork();
    const provider = networkProvider !== null && networkProvider !== void 0 ? networkProvider : readonlyNetwork === null || readonlyNetwork === void 0 ? void 0 : readonlyNetwork.provider;
    const switchNetwork = async (chainId) => {
        validateArguments({ chainId }, { chainId: 'number' });
        if (!provider) {
            throw new Error('Provider not connected.');
        }
        try {
            await provider.send('wallet_switchEthereumChain', [{ chainId: `0x${chainId.toString(16)}` }]);
        }
        catch (error) {
            const errChainNotAddedYet = 4902; // Metamask error code
            if (error.code === errChainNotAddedYet) {
                const chain = networks === null || networks === void 0 ? void 0 : networks.find((chain) => chain.chainId === chainId);
                if (chain === null || chain === void 0 ? void 0 : chain.rpcUrl) {
                    await provider.send('wallet_addEthereumChain', [getAddNetworkParams(chain)]);
                }
            }
        }
    };
    const account = accounts[0] ? getAddress(accounts[0]) : undefined;
    return {
        connector: undefined,
        library: provider,
        chainId: isUnsupportedChainId ? undefined : networkProvider !== undefined ? chainId : readonlyNetwork === null || readonlyNetwork === void 0 ? void 0 : readonlyNetwork.chainId,
        account,
        active: !!provider,
        activate: async (providerOrConnector) => {
            if ('getProvider' in providerOrConnector) {
                console.warn('Using web3-react connectors is deprecated and may lead to unexpected behavior.');
                await providerOrConnector.activate();
                return activate(await providerOrConnector.getProvider());
            }
            return activate(providerOrConnector);
        },
        activateBrowserWallet,
        deactivate,
        setError: () => {
            throw new Error('setError is deprecated');
        },
        error,
        isLoading,
        switchNetwork,
    };
}
//# sourceMappingURL=useEthers.js.map