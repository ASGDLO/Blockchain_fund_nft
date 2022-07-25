import { ReactNode } from 'react';
import { providers } from 'ethers';
import { Providers } from './model';
import { NodeUrls } from '../../../constants';
interface NetworkProviderProps {
    providerOverrides?: Providers;
    children?: ReactNode;
}
export declare const getProvidersFromConfig: (readOnlyUrls: NodeUrls) => {
    [x: string]: providers.BaseProvider;
};
export declare function ReadonlyNetworksProvider({ providerOverrides, children }: NetworkProviderProps): JSX.Element;
export {};
//# sourceMappingURL=provider.d.ts.map