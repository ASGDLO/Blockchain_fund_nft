/**
 * `useResolveName` is a hook that is used to resolve an ENS name (e.g. `name.eth`) to a specific address.
 * @param name ENS name to be resolved
 * @returns {} Object with the following:
  - `address: string | null | undefined` - resolved address for the given ENS name or null if not found.
  - `isLoading: boolean` - indicates whether the lookup is in progress.
  - `error: Error | null` - error that occurred during the lookup or null if no error occurred.
 * @public
 */
export declare const useResolveName: (name: string | undefined) => {
    address: string | null | undefined;
    isLoading: boolean;
    error: Error | null;
};
//# sourceMappingURL=useResolveName.d.ts.map