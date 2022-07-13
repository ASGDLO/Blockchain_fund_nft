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
import 'react';
import { TinyLine } from '@antv/g2plot/lib/plots/tiny-line';
import get from '@antv/util/lib/get';
import set from '@antv/util/lib/set';
import createPlot from '../createPlot';
import { polyfillOptions } from './core/polyfill';
import { isNil } from '@antv/util';
var polyfill = function (opt) {
    var options = polyfillOptions(opt);
    if (!isNil(options.yField)) { // yField不是null/undefined
        var list = options.data
            .map(function (item) { return item[options.yField]; })
            .filter(function (val) { return !isNil(val); });
        list && list.length && set(options, 'data', list);
    }
    var size = get(options, 'size');
    if (!isNil(size)) {
        var lineStyle = get(options, 'lineStyle', {});
        set(options, 'lineStyle', __assign(__assign({}, lineStyle), { lineWidth: size }));
    }
    set(options, 'tooltip', false);
    return options;
};
export default createPlot(TinyLine, 'TinyLineChart', polyfill);
//# sourceMappingURL=TinyLineChart.js.map