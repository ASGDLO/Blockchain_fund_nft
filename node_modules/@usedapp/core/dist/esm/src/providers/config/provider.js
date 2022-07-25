import { jsx as _jsx } from "react/jsx-runtime";
import { useReducer } from 'react';
import pickBy from 'lodash.pickby';
import { DEFAULT_CONFIG } from '../../model/config/default';
import { ConfigContext } from './context';
import { configReducer } from './reducer';
/**
 * We strip supplied config of undefined fields because it can easily break TS assumptions.
 *
 * Illustrative example:
 *
 * type FullConf = { something: string }
 * type PartConf = Partial<FullConf>
 *
 * const defaultConf: FullConf = { something: 'default' }
 * const suppliedConf: PartConf = { something: undefined }
 * const conf: FullConf = {...defaultConf, ...suppliedConf}
 * conf.something.toString() // OK according to TS, breaks on runtime.
 */
/**
 * @internal Intended for internal use - use it on your own risk
 */
const noUndefined = (x) => x !== undefined;
export function ConfigProvider({ config, children }) {
    var _a;
    const configWithDefaults = Object.assign(Object.assign(Object.assign({}, DEFAULT_CONFIG), pickBy(config, noUndefined)), { bufferGasLimitPercentage: undefined, gasLimitBufferPercentage: (_a = config.gasLimitBufferPercentage) !== null && _a !== void 0 ? _a : config.bufferGasLimitPercentage, notifications: Object.assign(Object.assign({}, DEFAULT_CONFIG.notifications), pickBy(config.notifications, noUndefined)) });
    const [reducedConfig, dispatch] = useReducer(configReducer, configWithDefaults);
    return _jsx(ConfigContext.Provider, { value: { config: reducedConfig, updateConfig: dispatch }, children: children });
}
//# sourceMappingURL=provider.js.map