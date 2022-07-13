import 'react';
import { Area } from '@antv/g2plot/lib/plots/area';
import createPlot from '../createPlot';
import { polyfillOptions, polyfillVisible, replaceApi } from './core/polyfill';
import { isNil } from '@antv/util';
;
export var polyfill = function (opt) {
    var options = polyfillOptions(opt);
    // line
    polyfillVisible(options, 'line');
    // point
    polyfillVisible(options, 'point');
    // 否则默认开启stack
    options.isStack = isNil(options.isStack) ? false : options.isStack;
    replaceApi([{
            sourceKey: 'stackField',
            targetKey: 'seriesField',
            notice: 'stackField是旧版api，即将废弃 请使用seriesField替代',
        }], options);
    return options;
};
export default createPlot(Area, 'AreaChart', polyfill);
//# sourceMappingURL=AreaChart.js.map