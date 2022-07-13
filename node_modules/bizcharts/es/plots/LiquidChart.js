var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import 'react';
import { Liquid } from '@antv/g2plot/lib/plots/liquid';
import createPlot from '../createPlot';
import { polyfillOptions, polyfillVisible } from './core/polyfill';
import { get, isNil, deepMix, isFunction } from '@antv/util';
export default createPlot(Liquid, 'LiquidChart', function (opt) {
    var _a = polyfillOptions(opt), range = _a.range, _b = _a.min, min = _b === void 0 ? 0 : _b, _c = _a.max, max = _c === void 0 ? 1 : _c, value = _a.value, options = __rest(_a, ["range", "min", "max", "value"]);
    if (!isNil(value)) {
        // 旧版数据使用方式
        options.percent = value / (max - min);
        var formatter_1 = get(options, 'statistic.content.formatter');
        if (options.statistic !== null && options.statistic !== false) {
            deepMix(options, {
                statistic: {
                    content: {
                        formatter: function () {
                            if (isFunction(formatter_1)) {
                                formatter_1(value);
                            }
                            return value;
                        }
                    }
                }
            });
        }
    }
    polyfillVisible(options, 'statistic');
    polyfillVisible(options, 'statistic.title');
    polyfillVisible(options, 'statistic.content');
    // value 转为data，用于placeholder统一判断
    var data = options.percent;
    return __assign({ data: data }, options);
});
//# sourceMappingURL=LiquidChart.js.map