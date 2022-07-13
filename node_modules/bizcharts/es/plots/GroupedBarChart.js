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
import warn from 'warning';
import { deepMix } from '@antv/util';
var REPLACEAPILIST = [{
        sourceKey: 'colorField',
        targetKey: 'seriesField',
        notice: 'colorField 是 g2@1.0的属性，即将废弃，请使用seriesField替代',
    }];
export default createPlot(Bar, 'GroupedBarChart', function (props) {
    warn(false, '<GroupedBarChart /> 在5.0后即将被废弃，请使用<BarChart /> 替代');
    var _a = polyfillOptions(props), barSize = _a.barSize, options = __rest(_a, ["barSize"]);
    replaceApi(REPLACEAPILIST, options);
    if (!isNil(barSize)) {
        options.minBarWidth = barSize;
        options.maxBarWidth = barSize;
    }
    deepMix(props, {
        isGroup: true,
    });
    return options;
});
//# sourceMappingURL=GroupedBarChart.js.map