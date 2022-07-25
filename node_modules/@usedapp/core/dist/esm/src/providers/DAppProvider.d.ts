import { ReactNode } from 'react';
import { Config } from '../constants';
export interface DAppProviderProps {
    children?: ReactNode;
    /**
     * Configuration of the DApp. See {@link Config} for more details.
     */
    config: Config;
}
/**
 * Provides basic services for a DApp.
 * @public
 */
export declare function DAppProvider({ config, children }: DAppProviderProps): JSX.Element;
//# sourceMappingURL=DAppProvider.d.ts.map