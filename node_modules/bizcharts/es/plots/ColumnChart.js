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
import { Column } from '@antv/g2plot/lib/plots/column';
import { polyfillOptions, replaceApi } from './core/polyfill';
import createPlot from '../createPlot';
import { isNil } from '@antv/util';
var REPLACEAPILIST = [{
        sourceKey: 'colorField',
        targetKey: 'seriesField',
        notice: 'colorField 是 g2@1.0的属性，即将废弃，请使用seriesField替代',
    }, {
        sourceKey: 'stackField',
        targetKey: 'seriesField',
        notice: 'colorField是旧版API，即将废弃 请使用seriesField替代',
    }];
export var polyfill = function (props) {
    var _a = polyfillOptions(props), columnSize = _a.columnSize, options = __rest(_a, ["columnSize"]);
    replaceApi(REPLACEAPILIST, options);
    if (!isNil(columnSize)) {
        options.minColumnWidth = columnSize;
        options.maxColumnWidth = columnSize;
    }
    return options;
};
export default createPlot(Column, 'ColumnChart', polyfill);
//# sourceMappingURL=ColumnChart.js.map