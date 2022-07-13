import _clone from '@antv/util/lib/clone';
// g2 的配置项为 xxCfg | null
export default (function (cfg, keys) {
    var opt = _clone(cfg);
    keys.forEach(function (key) {
        if (opt[key] === true) {
            opt[key] = {};
        }
        else if (opt[key] === false) {
            opt[key] = null;
        }
    });
    return opt;
});
//# sourceMappingURL=transBooleanCfg.js.map