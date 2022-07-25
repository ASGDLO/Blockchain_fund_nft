import { providers } from 'ethers';
declare type JsonRpcProvider = providers.JsonRpcProvider;
declare type ExternalProvider = providers.ExternalProvider;
declare type MaybePromise<T> = Promise<T> | any;
declare type SupportedProviders = JsonRpcProvider | ExternalProvider | {
    getProvider: () => MaybePromise<JsonRpcProvider | ExternalProvider>;
    activate: () => Promise<any>;
};
/**
 * @public
 */
export declare type Web3Ethers = {
    activate: (provider: SupportedProviders) => Promise<void>;
    /**
     * @deprecated
     */
    setError: (error: Error) => void;
    deactivate: () => void;
    connector: undefined;
    chainId?: number;
    account?: string;
    error?: Error;
    library?: JsonRpcProvider;
    active: boolean;
    activateBrowserWallet: () => void;
    isLoading: boolean;
    /**
     * Switch to a different network.
     */
    switchNetwork: (chainId: number) => Promise<void>;
};
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
export declare function useEthers(): Web3Ethers;
export {};
//# sourceMappingURL=useEthers.d.ts.map