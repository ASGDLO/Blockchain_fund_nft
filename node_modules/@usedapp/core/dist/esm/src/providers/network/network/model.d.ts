import type { providers } from 'ethers';
/**
 * @public
 */
export interface Network {
    provider?: providers.JsonRpcProvider;
    chainId?: number;
    accounts: string[];
    errors: Error[];
}
interface UpdateNetwork {
    type: 'UPDATE_NETWORK';
    network: Partial<Network>;
}
interface AddError {
    type: 'ADD_ERROR';
    error: Error;
}
export declare type Actions = UpdateNetwork | AddError;
export {};
//# sourceMappingURL=model.d.ts.map