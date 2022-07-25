import { ReactNode } from 'react';
interface Props {
    children: ReactNode;
    multicallAddresses: {
        [chainId: number]: string;
    };
}
/**
 * @internal Intended for internal use - use it on your own risk
 */
export declare function MultiChainStateProvider({ children, multicallAddresses }: Props): JSX.Element;
export {};
//# sourceMappingURL=provider.d.ts.map