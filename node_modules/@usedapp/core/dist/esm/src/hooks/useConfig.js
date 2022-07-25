import { useContext } from 'react';
import { getChainById } from '../helpers';
import { ConfigContext } from '../providers';
const validConfigs = (configs) => {
    if (!(configs === null || configs === void 0 ? void 0 : configs.networks) || (configs === null || configs === void 0 ? void 0 : configs.networks.length) === 0) {
        console.warn('No networks or supportedChain configured');
    }
    return configs;
};
/**
 * Returns singleton instance of {@link Config}.
 * Takes no parameters.
 * @public
 */
export function useConfig() {
    var _a;
    const { config } = useContext(ConfigContext);
    // backward compatible with supportedChains
    if (config.supportedChains) {
        console.warn('supportedChain is deprecated, please pass networks instead');
        const networks = (_a = config.supportedChains) === null || _a === void 0 ? void 0 : _a.map((chainId) => getChainById(chainId));
        return validConfigs(Object.assign(Object.assign({}, config), { networks }));
    }
    return validConfigs(config);
}
/**
 * @public
 */
export function useUpdateConfig() {
    const { updateConfig } = useContext(ConfigContext);
    return updateConfig;
}
//# sourceMappingURL=useConfig.js.map