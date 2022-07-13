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
import { Bar } from '@antv/g2plot/lib/plots/bar';
import createPlot from '../createPlot';
import { polyfillOptions, replaceApi } from './core/polyfill';
import { isNil } from '@antv/util';
export var polyfill = function (opt) {
    var _a = polyfillOptions(opt), barSize = _a.barSize, options = __rest(_a, ["barSize"]);
    replaceApi([{
            sourceKey: 'stackField',
            targetKey: 'seriesField',
            notice: 'stackField是旧版API，即将废弃 请使用seriesField替代',
        }, {
            sourceKey: 'colorField',
            targetKey: 'seriesField',
            notice: 'colorField是旧版API，即将废弃 请使用seriesField替代',
        }], options);
    if (!isNil(barSize)) {
        options.minBarWidth = barSize;
        options.maxBarWidth = barSize;
    }
    return options;
};
export default createPlot(Bar, 'BarChart', polyfill);
//# sourceMappingURL=BarChart.js.map