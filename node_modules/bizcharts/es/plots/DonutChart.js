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
import { Pie } from '@antv/g2plot/lib/plots/pie';
import createPlot from '../createPlot';
import { polyfillOptions, polyfillVisible } from './core/polyfill';
;
var polyfill = function (opt) {
    var options = polyfillOptions(opt);
    polyfillVisible(options, 'statistic');
    polyfillVisible(options, 'statistic.title');
    polyfillVisible(options, 'statistic.content');
    // g2Plot@1 默认是 0.8 innerRadius
    return __assign({ innerRadius: 0.8 }, options);
};
export default createPlot(Pie, 'DonutChart', polyfill);
//# sourceMappingURL=DonutChart.js.map