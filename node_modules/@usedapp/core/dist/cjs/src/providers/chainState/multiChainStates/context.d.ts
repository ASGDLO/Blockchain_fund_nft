import { Action, ChainState } from '..';
/**
 * @internal Intended for internal use - use it on your own risk
 */
export interface SingleChainState {
    value?: {
        blockNumber: number;
        state?: ChainState;
        error?: unknown;
    };
    multicallAddress: string | undefined;
}
/**
 * @internal Intended for internal use - use it on your own risk
 */
export declare type MultiChainState = {
    [chainId in number]?: SingleChainState;
};
/**
 * @internal Intended for internal use - use it on your own risk
 */
export declare const MultiChainStatesContext: import("react").Context<{
    chains: MultiChainState;
    dispatchCalls: (action: Action) => void;
}>;
/**
 * @internal Intended for internal use - use it on your own risk
 */
export declare function useMultiChainStates(): {
    chains: MultiChainState;
    dispatchCalls: (action: Action) => void;
};
//# sourceMappingURL=context.d.ts.map