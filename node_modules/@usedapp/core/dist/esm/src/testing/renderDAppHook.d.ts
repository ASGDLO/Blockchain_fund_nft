import React from 'react';
import { Config } from '../constants';
export interface RenderDAppHookOptions<Tprops> {
    config?: Config;
    renderHook?: {
        initialProps?: Tprops;
        wrapper?: React.ComponentClass<Tprops, any> | React.FunctionComponent<Tprops>;
    };
}
/**
 * Next version of {@link renderWeb3Hook}.
 *
 * @internal
 * Internal until it's ready and stable.
 *
 * Differences from {@link renderWeb3Hook}:
 * The rendering happens at much higher level, closer to reality.
 * It takes a Config object and renders the hook under test in a `DAppProvider`,
 * which mimicks the real useDApp usage.
 *
 * @param hook Hook under test
 * @param options Optional options, same as in `renderHook`
 * @returns Same as in `renderHook`, with additions of helper functions.
 */
export declare const renderDAppHook: <Tprops, TResult>(hook: (props: Tprops) => TResult, options?: RenderDAppHookOptions<Tprops> | undefined) => Promise<{
    waitForCurrent: (predicate: (value: TResult) => boolean, step?: number | undefined, timeout?: number | undefined) => Promise<void>;
    waitForCurrentEqual: (value: TResult, step?: number | undefined, timeout?: number | undefined) => Promise<void>;
    result: import("@testing-library/react-hooks").RenderResult<TResult>;
    rerender: (props?: Tprops | undefined) => void;
    unmount: () => void;
    waitForNextUpdate: import("@testing-library/react-hooks").WaitForNextUpdate;
}>;
//# sourceMappingURL=renderDAppHook.d.ts.map