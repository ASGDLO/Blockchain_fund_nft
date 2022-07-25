/**
 * Debounce a pair of values of types T and U.
 * It stores a single value but returns after debounced time unless a new value is assigned before the debounce time elapses, in which case the process restarts.

 * This function is used for debouncing multicall until enough calls are aggregated.
 * @param first first variable to be debounced
 * @param second second variable to be debounced
 * @param delay debounce time - amount of time in ms.
 * @internal Intended for internal use - use it on your own risk
 * @returns {} debounced values `[T, U]`
 */
export declare function useDebouncePair<T, U>(first: T, second: U, delay: number): [T, U];
//# sourceMappingURL=useDebouncePair.d.ts.map