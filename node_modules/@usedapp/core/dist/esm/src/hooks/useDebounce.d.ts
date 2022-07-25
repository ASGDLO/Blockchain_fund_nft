/**
 * Debounce a value of type T.
 * It stores a single value but returns after debounced time unless a new value is assigned before the debounce time elapses, in which case the process restarts.
 * @param value variable to be debounced
 * @param delay debounce time - amount of time in ms.
 * @internal Intended for internal use - use it on your own risk
 * @returns debounced value
 *
 * @example
 * const [someValue, setValue] = useState(...)
 * const debouncedValue = useDebounce(value, 1000)
 */
export declare function useDebounce<T>(value: T, delay: number): T;
//# sourceMappingURL=useDebounce.d.ts.map