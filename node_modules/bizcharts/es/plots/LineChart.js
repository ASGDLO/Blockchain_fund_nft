import 'react';
import { Line } from '@antv/g2plot/lib/plots/line';
import createPlot from '../createPlot';
import { polyfillOptions, polyfillVisible } from './core/polyfill';
;
export var polyfill = function (opt) {
    var options = polyfillOptions(opt);
    // point
    polyfillVisible(options, 'point');
    // bizcharts 端支持 <LineChart point /> 写法
    if (options.point === true) {
        options.point = {};
    }
    return options;
};
export default createPlot(Line, 'LineChart', polyfill);
//# sourceMappingURL=LineChart.js.map