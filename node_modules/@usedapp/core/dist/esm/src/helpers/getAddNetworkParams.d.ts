import { Chain } from '../constants';
export declare const getAddNetworkParams: (chain: Chain) => {
    chainId: string;
    chainName: string;
    rpcUrls: (string | undefined)[];
    blockExplorerUrls: string[] | undefined;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    } | undefined;
};
//# sourceMappingURL=getAddNetworkParams.d.ts.map