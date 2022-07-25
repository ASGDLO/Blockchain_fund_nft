import { ReactNode } from 'react';
import { providers } from 'ethers';
declare type JsonRpcProvider = providers.JsonRpcProvider;
interface NetworkProviderProps {
    children: ReactNode;
    providerOverride?: JsonRpcProvider;
}
/**
 * @internal Intended for internal use - use it on your own risk
 */
export declare function NetworkProvider({ children, providerOverride }: NetworkProviderProps): JSX.Element;
export {};
//# sourceMappingURL=provider.d.ts.map