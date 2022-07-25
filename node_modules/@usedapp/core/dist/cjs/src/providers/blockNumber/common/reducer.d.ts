interface BlockNumberState {
    [chainId: number]: number | undefined;
}
/**
 * @internal Intended for internal use - use it on your own risk
 */
export interface BlockNumberChanged {
    chainId: number;
    blockNumber: number;
}
/**
 * @internal Intended for internal use - use it on your own risk
 */
export declare function blockNumberReducer(state: BlockNumberState | undefined, action: BlockNumberChanged): BlockNumberState;
export {};
//# sourceMappingURL=reducer.d.ts.map