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
import createPlot from '../createPlot';
import { polyfillOptions } from './core/polyfill';
import { isNil } from '@antv/util';
import warn from 'warning';
import { deepMix } from '@antv/util';
export default createPlot(Column, 'GroupedColumnChart', function (props) {
    warn(false, '<GroupedColumnChart /> 在5.0后即将被废弃，请使用<ColumnChart /> 替代');
    var _a = polyfillOptions(props), columnSize = _a.columnSize, options = __rest(_a, ["columnSize"]);
    if (!isNil(columnSize)) {
        options.minColumnWidth = columnSize;
        options.maxColumnWidth = columnSize;
    }
    deepMix(props, {
        isGroup: true,
    });
    return options;
});
//# sourceMappingURL=GroupedColumnChart.js.map